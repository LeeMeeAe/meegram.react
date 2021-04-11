import React from "react";
import Navigation from "../component/common/Navigation";

const EditProfilePage = () => {
  return (
    <div>
      <Navigation />
      <main id="edit-profile">
        <div className="edit-profile__container">
          <header className="edit-profile__header">
            <div className="edit-profile__avatar-container">
              <img src="images/avatar.jpg" className="edit-profile__avatar" />
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
      <footer className="footer">
        <div className="footer__column">
          <nav className="footer__nav">
            <ul className="footer__list">
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  About Us
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Support
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Blog
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Press
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Api
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Jobs
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Privacy
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Directory
                </a>
              </li>
              <li className="footer__list-item">
                <a href="#" className="footer__link">
                  Language
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__column">
          <span className="footer__copyright">© 2017 Vietgram</span>
        </div>
      </footer>
    </div>
  );
};

export default EditProfilePage;
