import React from "react";
import Footer from "../components/Footer";
import FormRegister from "../components/FormRegister";
import Header from "../components/Header";

export const RegPage = () => {
  return (
    <>
      <Header
        status={
          <li>
            <p className="header__nav__link ">Registration...</p>
          </li>
        }
      ></Header>
      <FormRegister></FormRegister>
      <Footer></Footer>
    </>
  );
};
