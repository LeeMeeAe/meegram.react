import React from "react";
import Navigation from "../component/common/Navigation";

const ExplorePage = () => {
  return (
    <div>
      <Navigation />

      <main id="explore">
        <ul className="explore__users">
          <li className="explore__user">
            <div className="explore__user-column">
              <img src="images/avatar.jpg" className="explore__avatar" />
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
              <img src="images/avatar.jpg" className="explore__avatar" />
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
              <img src="images/avatar.jpg" className="explore__avatar" />
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

export default ExplorePage;
