import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useHttp } from "../components/hooks/http.hook";
import { MainItemModal } from "../components/MainItemModal";
import { Actions } from "../components/Actions";
import { useMessage } from "../components/hooks/message.hook";

export const MainItemCreate = () => {
  const message = useMessage();
  const { loading, request, error } = useHttp();
  const { token } = useContext(AuthContext);
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

  useEffect(() => {
    message(error);
  }, [error, message]);

  const changeHandler = (event) => {
    setItem({ ...item, [event.target.name]: event.target.value });
  };

  const createHandler = async () => {
    try {
      await request(
        "/api/item/create",
        "POST",
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
              <label htmlFor="photo">ID </label>
              <input
                id="photo"
                name="photo"
                type="text"
                alt="itemPhoto"
                placeholder="Url to Photo"
                className="item__img"
                onChange={changeHandler}
                value={item.photo}
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
                    placeholder="Firstname"
                    value={item.itemFirstName}
                    onChange={changeHandler}
                    disabled={false}
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
                    disabled={false}
                  />
                </div>
                <div className="item__input-box">
                  <label htmlFor="doctor">Doctor</label>
                  <select
                    className="item__input"
                    id="doctor"
                    name="doctor"
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
                  actiontext="Create"
                  type="button"
                  onClick={createHandler}
                  disabled={loading}
                ></Actions>
              </div>
            </div>
          </div>
        }
      ></MainItemModal>
    </>
  );
};

export default MainItemCreate;
