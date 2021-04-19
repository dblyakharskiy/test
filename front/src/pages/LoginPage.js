import React from "react";
import Footer from "../components/Footer";
import FormLogin from "../components/FormLogin";
import Header from "../components/Header";

export const LoginPage = () => {
  return (
    <>
      <Header
        status={
          <li>
            <p className="header__nav__link ">Loggining...</p>
          </li>
        }
      ></Header>
      <FormLogin></FormLogin>
      <Footer></Footer>
    </>
  );
};
