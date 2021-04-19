import React from "react";
import loader from "../img/icons/loader.svg";

export const Loader = () => {
  return (
    <div className="preloader">
      <img src={loader} alt="loader"></img>
    </div>
  );
};

export default Loader;
