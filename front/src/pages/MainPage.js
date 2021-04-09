import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import background from "../img/background.jpg";

export const MainPage = () => {
  return (
    <div>
      <Header></Header>
      <img src={background} alt="img" />
      <Footer></Footer>
    </div>
  );
};
