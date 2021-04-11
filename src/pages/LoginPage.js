import React from "react";
import Footer from "../component/common/Footer";

const LoginPage = () => {
  return (
    <div>
      <main id="login">
        {/* <!-- 좌측 이미지 2222222--> */}
        <div className="login__column">
          <img
            src={process.env.PUBLIC_URL + "/images/phoneImage.png"}
            className="login__phone"
            alt="인스타그램이미지"
          />
        </div>
        {/* <!-- 우측 칼럼 --> */}
        <div className="login__column">
          <div className="login__box">
            {/* <!-- 로그인 입력창 --> */}
            <img
              src="images/loginLogo.png"
              alt="인스타그램로고"
              className="login__logo"
            />
            <form action="feed.html" method="get" className="login__form">
              <input
                type="text"
                name="username"
                placeholder="Username"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <input type="submit" value="Log in" />
            </form>
            {/* <!-- 비밀번호 찾기 --> */}
            <span className="login__divider">or</span>
            <a href="#" className="login__link">
              <i className="fa fa-money"></i>
              Log in with Facebook
            </a>
            <a href="#" className="login__link login__link--small">
              Forgot password
            </a>
          </div>
          {/* <!-- 회원가입 박스 --> */}
          <div className="login__box">
            <span>Don't have an account?</span> <a href="#">Sign up</a>
          </div>
          {/* <!-- app다운로드 --> */}
          <div className="login__box--transparent">
            <span>Get the app</span>
            <div className="login__appstores">
              <img
                src="images/ios.png"
                className="login__appstore"
                alt="Apple appstore logo"
                title="Apple appstore logo"
              />
              <img
                src="images/android.png"
                alt="Anroid appstore logo"
                className="login__appstore"
                title="Android appstore logo"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
