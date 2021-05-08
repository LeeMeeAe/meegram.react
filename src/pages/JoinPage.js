import React from "react";
import Footer from "../component/common/Footer";
import JoinForm from "../component/common/JoinForm";

const JoinPage = () => {
  return (
    <div>
      <main id="join">
        <div className="join__column">
          <div className="join__box">
            {/* <!-- 회원가입 입력창 --> */}
            <img src="images/loginLogo.png" alt="인스타그램로고" className="join__logo"/>
            <h2 className="join_txt">Sign up to see photos and videos of your friends.</h2>
            <button className="facebook__login">Sign in to Facebook</button>

            <span className="join__divider">or</span>
              <JoinForm />
            <span className="Policy_txt">By signing up, you agree to Instagram's terms, datapolicy and cookie policy.</span>
          </div>
          {/* <!-- 회원가입 박스 --> */}
          <div className="join__box">
            <span>Do you have an account?</span> <a href="/login">Sign in</a>
          </div>
          {/* <!-- app다운로드 --> */}
          <div className="join__box--transparent">
            <span>Get the app</span>
            <div className="join__appstores">
              <img src="images/ios.png" className="join__appstore" alt="Apple appstore logo" title="Apple appstore logo" />
              <img src="images/android.png" alt="Anroid appstore logo" className="join__appstore" title="Android appstore logo" />
            </div>
        </div>
      </div>
      </main>

      <Footer />
    </div>
  );
};

export default JoinPage;
