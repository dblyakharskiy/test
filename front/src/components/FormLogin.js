import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useHttp } from "../components/hooks/http.hook";
import { AuthContext } from "../context/AuthContext";

export const FormLogin = () => {
  const auth = useContext(AuthContext);
  const { loading, request } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
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
          <button
            type="button"
            className="auth__btn"
            onClick={loginHandler}
            disabled={loading}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default FormLogin;
