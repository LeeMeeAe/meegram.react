import React from "react";
import Navigation from "../component/common/Navigation";
import Footer from "../component/common/Footer";

const EditProfilePage = () => {
  return (
    <div>
      <Navigation />
      <main id="edit-profile">
        <div className="edit-profile__container">
          <header className="edit-profile__header">
            <div className="edit-profile__avatar-container">
              <img
                src={process.env.PUBLIC_URL + "/images/avatar.jpg"}
                className="edit-profile__avatar"
                alt="프로필사진"
              />
            </div>
            <h4 className="edit-profile__username">serranoarevalo</h4>
          </header>
          <form action="" className="edit-profile__form">
            <div className="form__row">
              <label for="full-name" className="form__label">
                Name:
              </label>
              <input id="full-name" type="text" className="form__input" />
            </div>
            <div className="form__row">
              <label for="user-name" className="form__label">
                Username:
              </label>
              <input id="user-name" type="text" className="form__input" />
            </div>
            <div className="form__row">
              <label for="website" className="form__label">
                Website:
              </label>
              <input id="website" type="url" className="form__input" />
            </div>
            <div className="form__row">
              <label for="bio" className="form__label">
                Bio:
              </label>
              <textarea id="bio"></textarea>
            </div>
            <div className="form__row">
              <label for="email" className="form__label">
                Email:
              </label>
              <input id="email" type="email" className="form__input" />
            </div>
            <div className="form__row">
              <label for="phone" className="form__label">
                Phone Number:
              </label>
              <input id="phone" type="tel" className="form__input" />
            </div>
            <div className="form__row">
              <label for="gender" className="form__label">
                Gender:
              </label>
              <select id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="cant">Can't remember</option>
              </select>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EditProfilePage;
