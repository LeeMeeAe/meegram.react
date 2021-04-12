import React from "react";
import Navigation from "../component/common/Navigation";
import Footer from "../component/common/Footer";

const ExplorePage = () => {
  return (
    <div>
      <Navigation />

      <main id="explore">
        <ul className="explore__users">
          <li className="explore__user">
            <div className="explore__user-column">
              <img src={process.env.PUBLIC_URL + "/images/avatar.jpg"} className="explore__avatar" alt="프로필사진" />
              <div className="explore__info">
                <span className="explore__username">inthetiger</span>
                <span className="explore__full-name">Lynn Park</span>
              </div>
            </div>
            <div className="explore__user-column">
              <button>Follow</button>
            </div>
          </li>
          <li className="explore__user">
            <div className="explore__user-column">
              <img src={process.env.PUBLIC_URL + "/images/avatar.jpg"} className="explore__avatar" alt="프로필사진" />
              <div className="explore__info">
                <span className="explore__username">inthetiger</span>
                <span className="explore__full-name">Lynn Park</span>
              </div>
            </div>
            <div className="explore__user-column">
              <button>Follow</button>
            </div>
          </li>
          <li className="explore__user">
            <div className="explore__user-column">
              <img src={process.env.PUBLIC_URL + "/images/avatar.jpg"} className="explore__avatar" alt="프로필사진" />
              <div className="explore__info">
                <span className="explore__username">inthetiger</span>
                <span className="explore__full-name">Lynn Park</span>
              </div>
            </div>
            <div className="explore__user-column">
              <button>Follow</button>
            </div>
          </li>
        </ul>
      </main>

      <Footer />
    </div>
  );
};

export default ExplorePage;
