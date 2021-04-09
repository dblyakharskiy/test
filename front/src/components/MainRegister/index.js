import React from "react";
import "./style.scss";

function MainRegister() {
  return (
    <div className="base-container">
      <div className="header">Register</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="text" name="password" placeholder="password" />
            <label htmlFor="confirm-password">Confirm-Password</label>
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirm-password"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn">
          Register
        </button>
      </div>
    </div>
  );
}
export default MainRegister;