import React, { useState } from "react";
import history from "../../routes/History"

const LoginForm = () => {

  //1. 버튼에 이벤트를 준다.
  //2. 아이디와 비밀번호 입력값을 준다.
  //3. 아이디와 비밀번호 입력값을 useState 담기
  //4. 로그인 성공

  const loginId = 'meeae';
  const loginPw = '1212';

  const [inputUserName,setInputUserName] = useState("");
  const [inputUserPassWord,setInputUserPassWord] = useState("");
  
  const handleSubmitButton = (e) =>{

    e.preventDefault();
  

      if (inputUserName == "") {
        alert("아이디를 입력해주세요");
        return;
      }

      if(inputUserPassWord == "") {
        alert("비밀번호를 입력하세요");
        return;
      }

      if(inputUserName !== loginId) {
        alert("아이디를 정확하게 입력해주세요")
        return;
      }

      if(inputUserPassWord !== loginPw) {
        alert("비밀번호를 정확하게 입력해주세요")
        return;
      }

      alert("로그인을 성공했습니다")

      history.push("/main")

  };

  const handleChangeInputUserName = (e) => {
    setInputUserName(e.target.value);
  };

  const handleChangeInputUserPassWord = (e) => {
    setInputUserPassWord(e.target.value);
  };

  return (
    <form className="login__form">
      <input
        type="text"
        name="username"
        placeholder="Username"
        required
        onChange = { (e) => handleChangeInputUserName(e) }
        
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange = { (e) => handleChangeInputUserPassWord(e) }
        
      />
      <button
        value="Log in"
        className="submitButton"
        onClick = { (e)=> handleSubmitButton(e) }
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
