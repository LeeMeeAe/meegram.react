import React from "react";
import Navigation from "../component/common/Navigation";
import Footer from "../component/common/Footer";
const ProfilePage = () => {
  return (
    <div>
      <Navigation />
      <main id="profile">
        <header className="profile__header">
          <div className="profile__column">
            <img src="images/avatar.jpg" alt="프로필사진" />
          </div>
          <div className="profile__column">
            <div className="profile__title">
              <h3 className="profile__username">Meeya</h3>
              <a href="edit-profile.html">Edit profile</a>
              <i className="fa fa-cog fa-lg"></i>
            </div>
            <ul className="profile__stats">
              <li className="profile__stat">
                <span className="stat__number">333</span> posts
              </li>
              <li className="profile__stat">
                <span className="stat__number">1234</span> followers
              </li>
              <li className="profile__stat">
                <span className="stat__number">36</span> following
              </li>
            </ul>
            <p className="profile__bio">
              <span className="profile__full-name">
                Nicolás Serrano Arévalo
              </span>
              Doing whatever and eating Pho Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ducimus suscipit praesentium
              eveniet quibusdam ipsam omnis fugit. Tempore voluptates ratione
              recusandae natus illo perspiciatis suscipit, odio consequuntur
              quasi obcaecati minus! Omnis.
              <a href="#">serranoarevalo.com</a>
            </p>
          </div>
        </header>
        {/* <!-- 프로필포토 --> */}
        <section className="profile__photos">
          <div className="profile__photo">
            <img src="images/feedPhoto.jpg" alt="피드이미지" />
            <div className="profile__photo-overlay">
              <span className="overlay__item">
                <i className="fa fa-heart"></i>
                486
              </span>
              <span className="overlay__item">
                <i className="fa fa-comment"></i>
                344
              </span>
            </div>
          </div>

          <div className="profile__photo">
            <img src="images/feedPhoto.jpg" alt="피드이미지" />
            <div className="profile__photo-overlay">
              <span className="overlay__item">
                <i className="fa fa-heart"></i>
                486
              </span>
              <span className="overlay__item">
                <i className="fa fa-comment"></i>
                344
              </span>
            </div>
          </div>

          <div className="profile__photo">
            <img src="images/feedPhoto.jpg" alt="피드이미지" />
            <div className="profile__photo-overlay">
              <span className="overlay__item">
                <i className="fa fa-heart"></i>
                486
              </span>
              <span className="overlay__item">
                <i className="fa fa-comment"></i>
                344
              </span>
            </div>
          </div>

          <div className="profile__photo">
            <img src="images/feedPhoto.jpg" alt="피드이미지수정" />
            <div className="profile__photo-overlay">
              <span className="overlay__item">
                <i className="fa fa-heart"></i>
                486
              </span>
              <span className="overlay__item">
                <i className="fa fa-comment"></i>
                344
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;
