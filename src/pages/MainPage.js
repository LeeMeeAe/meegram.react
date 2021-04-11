import React from "react";
import Navigation from "../component/common/Navigation";

const MainPage = () => {
  return (
    <div>
      <Navigation />
      <main id="feed">
        <div className="photo">
          <header className="photo__header">
            <img src="images/avatar.jpg" className="photo__avatar" />
            <div className="photo__user-info">
              <span className="photo__author">inthetiger</span>
              <span className="photo__location">Bestechung</span>
            </div>
          </header>
          <img src="images/feedPhoto.jpg" />
          <div className="photo__info">
            <div className="photo__actions">
              <span className="photo__action">
                <i className="fa fa-heart-o fa-lg"></i>
              </span>
              <span className="photo__action">
                <i className="fa fa-comment-o fa-lg"></i>
              </span>
            </div>
            <span className="photo__likes">45 likes</span>
            <ul className="photo__comments">
              <li className="photo__comment">
                <span className="photo__comment-author">serranoarevalo</span>{" "}
                love this!
              </li>
              <li className="photo__comment">
                <span className="photo__comment-author">serranoarevalo</span>{" "}
                love this!
              </li>
              <li className="photo__comment">
                <span className="photo__comment-author">serranoarevalo</span>{" "}
                love this!
              </li>
              <li className="photo__comment">
                <span className="photo__comment-author">serranoarevalo</span>{" "}
                love this!
              </li>
            </ul>
            <span className="photo__time-ago">2 hours ago</span>
            <div className="photo__add-comment-container">
              <textarea
                name="comment"
                placeholder="Add a comment..."
              ></textarea>
              <i className="fa fa-ellipsis-h"></i>
            </div>
          </div>
        </div>
        <div className="photo">
          <header className="photo__header">
            <img src="images/avatar.jpg" className="photo__avatar" />
            <div className="photo__user-info">
              <span className="photo__author">inthetiger</span>
              <span className="photo__location">Bestechung</span>
            </div>
          </header>
          <img src="images/feedPhoto.jpg" />
          <div className="photo__info">
            <div className="photo__actions">
              <span className="photo__action">
                <i className="fa fa-heart-o fa-lg"></i>
              </span>
              <span className="photo__action">
                <i className="fa fa-comment-o fa-lg"></i>
              </span>
            </div>
            <span className="photo__likes">45 likes</span>
            <ul className="photo__comments">
              <li className="photo__comment">
                <span className="photo__comment-author">serranoarevalo</span>{" "}
                love this!
              </li>
              <li className="photo__comment">
                <span className="photo__comment-author">serranoarevalo</span>{" "}
                love this!
              </li>
              <li className="photo__comment">
                <span className="photo__comment-author">serranoarevalo</span>{" "}
                love this!
              </li>
              <li className="photo__comment">
                <span className="photo__comment-author">serranoarevalo</span>{" "}
                love this!
              </li>
            </ul>
            <span className="photo__time-ago">2 hours ago</span>
            <div className="photo__add-comment-container">
              <textarea
                name="comment"
                placeholder="Add a comment..."
              ></textarea>
              <i className="fa fa-ellipsis-h"></i>
            </div>
          </div>
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

export default MainPage;
