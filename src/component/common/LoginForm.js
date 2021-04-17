import React, { useState } from "react";

const LoginForm = () => {
  const [inputUserName, setInputUserName] = useState("");
  const [inputUserPassword, setInputUserPassword] = useState("");

  const handleclicksubmitButton = (e) => {
    e.preventDefault();

    if (inputUserName == "") {
      alert("아이디를 입력해 주세요.");
      return;
    }

    if (inputUserPassword == "") {
      alert("비밀번호를 입력해 주세요.");
      return;
    }

    // 로그인

    alert(
      "입력하신 아이디: " +
        inputUserName +
        " 비밀번호: " +
        inputUserPassword +
        "입니다."
    );
  };

  const handlechangeinputUserName = (e) => {
    setInputUserName(e.target.value);
  };
  const handlechangeinputUserPassword = (e) => {
    setInputUserPassword(e.target.value);
  };

  return (
    <form className="login__form">
      <input
        type="text"
        name="username"
        placeholder="Username"
        required
        onChange={(e) => handlechangeinputUserName(e)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange={(e) => handlechangeinputUserPassword(e)}
      />
      <button
        value="Log in"
        className="submitButton"
        onClick={(e) => handleclicksubmitButton(e)}
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
