import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Main = () => {
  return (
    <>
      <Header
        status={
          <li>
            <NavLink className="header__nav__link active" to="/login">
              Auth
            </NavLink>
          </li>
        }
      ></Header>
      <span className="main-text">Please Login or Register for continue</span>
      <Footer></Footer>
    </>
  );
};

export default Main;
