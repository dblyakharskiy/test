import React from "react";
import { useParams, Link } from "react-router-dom";
import { MainItemModal } from "../components/MainItemModal";

export const MainItemAbout = ({ item }) => {
  const itemId = useParams().id;

  return (
    <>
      <MainItemModal
        page={
          <div className="item-container">
            <div className="item-photo">
              <label htmlFor="photo">ID {itemId}</label>
              <input
                id="photo"
                name="photo"
                type="image"
                alt="itemPhoto"
                placeholder="Url to Photo"
                className="item__img"
                value="src"
                src={item.photo}
                readOnly={true}
              />
            </div>
            <div className="item">
              <div className="item__inputs">
                <div className="item__input-box">
                  <label htmlFor="itemFirstName">First Name</label>
                  <input
                    className="item__input"
                    id="itemFirstName"
                    name="itemFirstName"
                    type="text"
                    placeholder="FirstName"
                    value={item.itemFirstName}
                    readOnly={true}
                  />
                </div>
                <div className="item__input-box">
                  <label htmlFor="itemLastName">Last Name</label>
                  <input
                    className="item__input"
                    id="itemLastName"
                    name="itemLastName"
                    type="text"
                    placeholder="Lastname"
                    value={item.itemLastName}
                    readOnly={true}
                  />
                </div>
                <div className="item__input-box">
                  <label htmlFor="doctor">Doctor</label>
                  <select
                    className="item__input"
                    id="doctor"
                    name="doctor"
                    value={item.doctor}
                    readOnly={true}
                  >
                    <option selected disabled>
                      Choose doctor
                    </option>
                    <option value="Doctor 1">Doctor 1</option>
                    <option value="Doctor 2">Doctor 2</option>
                    <option value="Doctor 3">Doctor 3</option>
                  </select>
                </div>
                <div className="item__input-box">
                  <label htmlFor="gender">Gender</label>
                  <select
                    className="item__input"
                    id="gender"
                    name="gender"
                    value={item.gender}
                    readOnly={true}
                  >
                    <option selected disabled>
                      Choose gender
                    </option>
                    <option value="Famale">Famale</option>
                    <option value="Male">Male</option>
                  </select>
                </div>
                <div className="item__input-box">
                  <label htmlFor="phone">Phone</label>
                  <input
                    className="item__input"
                    id="phone"
                    name="phone"
                    type="text"
                    placeholder="Phone"
                    value={item.phone}
                    readOnly={true}
                  />
                </div>
                <div className="item__input-box">
                  <label htmlFor="age">Age</label>
                  <input
                    className="item__input"
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Age"
                    value={item.age}
                    readOnly={true}
                  />
                </div>
              </div>

              <div className="item-btns">
                {
                  <Link className="item-edit-btn" to={`/edit/${item._id}`}>
                    EDIT
                  </Link>
                }
              </div>
            </div>
          </div>
        }
      ></MainItemModal>
    </>
  );
};

export default MainItemAbout;
