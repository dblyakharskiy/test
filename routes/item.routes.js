const config = require("config");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");
const { Router } = require("express");
const Item = require("../models/Item");
const router = Router();

router.post(
  "/create",
  [
    check("photo", "Press password").exists(),
    check("itemFirstName", "Press password").exists(),
    check("itemLastName", "Press password").exists(),
    check("phone", "Press password").exists(),
    check("gender", "Press password").exists(),
    check("age", "Press password").exists().isNumeric(),
    check("doctor", "Press password").exists(),
  ],
  auth,
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ errors: errors.array(), massage: "Fill all fields" });
      }
      const baseUrl = config.get("baseUrl");
      const {
        photo,
        itemFirstName,
        itemLastName,
        phone,
        gender,
        age,
        doctor,
      } = req.body;

      const item = new Item({
        photo,
        itemFirstName,
        itemLastName,
        phone,
        gender,
        age,
        doctor,
      });
      await item.save();
      res.status(201).json({ item });
    } catch (e) {
      res.status(500).json({ message: "Can`t the save item" });
    }
  }
);

router.get("/", auth, async (req, res) => {
  try {
    const baseUrl = config.get("baseUrl");
    const items = await Item.find({});
    res.json(items);
  } catch (e) {
    res.status(500).json({ message: "Can`t the get items" });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const baseUrl = config.get("baseUrl");
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (e) {
    res.status(500).json({ message: "Can`t the get item by ID" });
  }
});

router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const baseUrl = config.get("baseUrl");
    const item = await Item.findByIdAndDelete(req.params.id).then((item) =>
      res.json({ msg: "Deleted successfully" })
    );
  } catch (e) {
    res.status(400).json({ error: "Unable to update the Database" });
  }
});

router.put(
  "/update/:id",
  [
    check("photo", "Press password").exists(),
    check("itemFirstName", "Press password").exists(),
    check("itemLastName", "Press password").exists(),
    check("phone", "Press password").exists(),
    check("gender", "Press password").exists(),
    check("age", "Press password").exists().isNumeric(),
    check("doctor", "Press password").exists(),
  ],
  auth,
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array(), massage: "Fill all fields" });
    }
    const item = await Item.findByIdAndUpdate(req.params.id, req.body)
      .then((item) => res.json({ msg: "Updated successfully" }))
      .catch((e) =>
        res.status(400).json({ error: "Unable to update the Database" })
      );
  }
);

module.exports = router;
