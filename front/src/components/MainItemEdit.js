import React, { useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { MainItemModal } from "./MainItemModal";
import { Actions } from "./Actions";
import { useHttp } from "./hooks/http.hook";
import { AuthContext } from "../context/AuthContext";

export const MainItemEdit = () => {
  const itemId = useParams().id;
  const { token } = useContext(AuthContext);
  const { request, loading } = useHttp();
  const history = useHistory();
  const [item, setItem] = useState({
    photo: "",
    itemFirstName: "",
    itemLastName: "",
    phone: "",
    gender: "",
    age: "",
    doctor: "",
  });

  const deleteHandler = async () => {
    try {
      await request(`/api/item/delete/${itemId}`, "DELETE", null, {
        Authorization: `Bearer ${token}`,
      });
      history.push("/item");
    } catch (e) {}
  };

  const changeHandler = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  const updateHandler = async () => {
    try {
      await request(
        `/api/item/update/${itemId}`,
        "PUT",
        { ...item },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      history.push("/item");
    } catch (e) {}
  };

  return (
    <>
      <MainItemModal
        page={
          <div className="item-container">
            <div>
              <label htmlFor="photo">ID {itemId}</label>
              <input
                id="photo"
                name="photo"
                type="text"
                alt="itemPhoto"
                placeholder="Url to Photo"
                className="item__img"
                value={item.photo}
                src={item.photo}
                onChange={changeHandler}
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
                    onChange={changeHandler}
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
                    onChange={changeHandler}
                  />
                </div>
                <div className="item__input-box">
                  <label htmlFor="doctor">Doctor</label>
                  <select
                    className="item__input"
                    id="doctor"
                    name="doctor"
                    value={item.doctor}
                    onChange={changeHandler}
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
                    onChange={changeHandler}
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
                    onChange={changeHandler}
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
                    onChange={changeHandler}
                  />
                </div>
              </div>

              <div className="item-btns">
                <Actions
                  actiontext="Delete"
                  type="button"
                  disabled={loading}
                  onClick={deleteHandler}
                ></Actions>
                <Actions
                  actiontext="Cancel"
                  type="button"
                  disabled={loading}
                  onClick={history.goBack}
                ></Actions>
                <Actions
                  actiontext="Update"
                  type="button"
                  disabled={loading}
                  onClick={updateHandler}
                ></Actions>
              </div>
            </div>
          </div>
        }
      ></MainItemModal>
    </>
  );
};

export default MainItemEdit;
