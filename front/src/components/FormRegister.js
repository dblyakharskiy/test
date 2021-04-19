import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useHttp } from "../components/hooks/http.hook";

export const FormRegister = () => {
  const { loading, request } = useHttp();
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  useEffect(() => {
    console.log();
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      await request("/api/auth/register", "POST", { ...form });
    } catch (e) {}
  };

  return (
    <div className="auth-container">
      <div className="auth">
        <div className="auth__box">
          <NavLink className="auth__link" to="/reg">
            Register
          </NavLink>
          <span className="auth__link">or</span>
          <NavLink className="auth__link" to="/login">
            Login
          </NavLink>
        </div>
        <div className="auth__input-box">
          <input
            className="auth__input"
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Firstname"
            value={form.firstName}
            onChange={changeHandler}
          />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="auth__input-box">
          <input
            className="auth__input"
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Lastname"
            value={form.lastName}
            onChange={changeHandler}
          />
          <label htmlFor="lastName">Last Name</label>
        </div>
        <div className="auth__input-box">
          <input
            className="auth__input"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={changeHandler}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="auth__input-box">
          <input
            className="auth__input"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={changeHandler}
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="auth__input-box">
          <input
            className="auth__input"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={changeHandler}
          />
          <label htmlFor="confirmPassword">ConfirnpPassword</label>
        </div>

        <div className="auth__input-box">
          <button
            type="button"
            className="auth__btn"
            onClick={registerHandler}
            disabled={loading}
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};
export default FormRegister;
