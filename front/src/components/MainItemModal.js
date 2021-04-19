import React from "react";
import btnClose from "../img/icons/close.svg";
import logoutHandler, { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const MainItemModal = (props) => {
  return (
    <>
      <Header
        status={
          <li>
            <a className="header__nav__link " href="/" onClick={logoutHandler}>
              Logout
            </a>
          </li>
        }
      ></Header>
      <div className="modal-container">
        <div className="modal">
          {
            <a href="/item">
              <img className="modal__btn__close" src={btnClose} alt="img"></img>
            </a>
          }
        </div>
        <>{props.page}</>
      </div>
      <Footer></Footer>
    </>
  );
};
export default MainItemModal;
