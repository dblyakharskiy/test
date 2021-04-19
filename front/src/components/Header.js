import React from "react";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  return (
    <header className="header-container">
      <nav>
        <div className="header__nav">
          <NavLink className="header__nav__logo" to="/main">
            CLINIC
          </NavLink>
          <ul className="header__nav__item">{props.status}</ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
