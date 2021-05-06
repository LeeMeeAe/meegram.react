import React from "react";
import Footer from "../component/common/Footer";

const JoinPage = () => {
  return (
    <div>
      <main id="join">
        <div class="join__column">
          <div class="join__box">
            {/* <!-- 회원가입 입력창 --> */}
            <img src="images/loginLogo.png" alt="인스타그램로고" class="join__logo"/>
            <h2 class="join_txt">Sign up to see photos and videos of your friends.</h2>
            <button class="facebook__login">Sign in to Facebook</button>

            <span class="join__divider">or</span>
            <form action="feed.html" method="get" class="join__form">
              <input type="text" name="emailOrPhone" placeholder="Mobile phone number or email address" required />
              <input type="text" name="FullName" placeholder="Statement" required />
              <input type="text" name="username" placeholder="Your name" required />
              <input type="password" name="password" placeholder="Password" required />
              <input type="submit" value="Sign up" />
            </form>
            <span class="Policy_txt">By signing up, you agree to Instagram's terms, datapolicy and cookie policy.</span>
          </div>
          {/* <!-- 회원가입 박스 --> */}
          <div class="join__box">
            <span>Do you have an account?</span> <a href="/login">Sign in</a>
          </div>
          {/* <!-- app다운로드 --> */}
          <div class="join__box--transparent">
            <span>Get the app</span>
            <div class="join__appstores">
              <img src="images/ios.png" class="join__appstore" alt="Apple appstore logo" title="Apple appstore logo" />
              <img src="images/android.png" alt="Anroid appstore logo" class="join__appstore" title="Android appstore logo" />
            </div>
        </div>
      </div>
      </main>

      <Footer />
    </div>
  );
};

export default JoinPage;
