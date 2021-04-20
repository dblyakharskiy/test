import React, { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import about from "../img/icons/about.svg";

export const MainItems = ({ items }) => {
  const auth = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    auth.logout();
  };
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
      />
      <div className="itemlist-wrapper">
        <button className="itemlist-btn">
          <Link className="itemlist-btn__item" to={"/create"}>
            Create Item
          </Link>
        </button>

        <table className="itemlist">
          <tbody className="itemlist-tbody">
            {items.map((item, index) => {
              return (
                <tr className="itemlist-tbody__box">
                  <td className="itemlist-tbody__item">{index + 1 + "."}</td>
                  <td className="itemlist-tbody__item">
                    {item.itemFirstName} {item.itemLastName}
                  </td>
                  <td className="itemlist-tbody__item">
                    <Link to={`/item/${item._id}`}>
                      <img src={about} alt="about"></img>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};

export default MainItems;
