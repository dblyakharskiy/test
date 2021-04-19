const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const config = require("config");
const User = require("../models/User");
const router = Router();

// /api/auth/register
router.post(
  "/register",
  [
    check("email", "Wrong email").isEmail(),
    check("password", "Min password lenth 8").isLength({ min: 8 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ errors: errors.array(), massage: "Wrong register data" });
      }

      const { email, firstName, lastName, password } = req.body;

      const preUser = await User.findOne({ email });

      if (preUser) {
        return res.status(400).json({ message: "Email already exist" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({
        email,
        firstName,
        lastName,
        password: hashedPassword,
      });

      await user.save();
      res.status(201).json({ message: "User created" });
    } catch (e) {
      res.status(500).json({ message: "Error" });
    }
  }
);

// /api/auth/login
router.post(
  "/login",
  [
    check("email", "Wrong email").isEmail(),
    check("password", "Press password").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ errors: errors.array(), massage: "Wrong login data" });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "This email doesn't exist" });
      }

      const isMatchPassword = await bcrypt.compare(password, user.password);
      if (!isMatchPassword) {
        return res.status(400).json({ message: "Wrong password" });
      }

      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "24h",
      });
      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: "Error" });
    }
  }
);

module.exports = router;
