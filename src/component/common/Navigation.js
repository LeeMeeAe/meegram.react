import React from "react";
//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

// function Navigation() {
const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__column">
        <a href="feed.html">
          <img src="images/logo.png" alt="" />
        </a>
      </div>
      <div className="navigation__column">
        {/* FontAwesome 변환 */}
        <FontAwesomeIcon icon={faSearch} className="search" />
        <i className="fa fa-search"></i>
        <input type="text" placeholder="Search" />
      </div>
      <div className="navigation__column">
        <ul className="navigations__links">
          <li className="navigation__list-item">
            <a href="explore.html" className="navigation__link">
              {/* FontAwesome 변환 */}
              <FontAwesomeIcon icon={faCompass} className="compass" />
              <i className="fa fa-compass fa-lg"></i>
            </a>
          </li>
          <li className="navigation__list-item">
            <a href="/" className="navigation__link">
              {/* FontAwesome 변환 */}
              <FontAwesomeIcon icon={faHeart} className="heart" />
              <i className="fa fa-heart-o fa-lg"></i>
            </a>
          </li>
          <li className="navigation__list-item">
            <a href="profile.html" className="navigation__link">
              {/* FontAwesome 변환 */}
              <FontAwesomeIcon icon={faUser} className="user" />
              <i className="fa fa-user-o fa-lg"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
