import React, { useState } from "react";
import history from "../../routes/history";

const LoginForm = () => {

  //1. 버튼에 이벤트를 줍니다.
  //2. form onChange ID를 입력한다 -> PW를 입력한다. ->입력값 부여
  //3. 공란일때 어떻게 할 것 인지
  //4. ID PW 매칭 
  //5. submit 성공 -> main 페이지 history

  const login_id = 'meeae';
  const login_password = '1212';

  // [ 순서도 ] 로그인 ->아이디 패스워드 입력 -> 버튼클릭

  // 로그인 정보 공란일때 useState
  // setInputUserName, setInputUserPassword 담는다.
  const [inputUserName,setInputUserName] = useState("");
  const [inputUserPassWord,setInputUserPassWord] = useState("");

  // 아이디, 비밀번호를 제대로 입력했는지 체크
  const handleInputSubmitButton = (e) =>{
    // submit할때 url변경을 막아줌. 안에서 해결하게끔. 이벤트에 preventDefault
    e.prevetDefault();


     // 로그인 정보 공란일때 이벤트
    if (inputUserName == "") {
      alert("아이디를 입력해주세요");
      return;
    }

    if (inputUserPassWord =="") {
      alert("비밀번호를 입력해주세요")
      return;
    }
    //로그인 정보 맞을때 "" 없어야지 함수로 생각
    if (inputUserName !== login_id){
      alert("아이디를 정확하게 입력해주세요")
      // return;
    }

    if (inputUserPassWord !== login_password){
      alert("비밀번호를 정확하게 입력해주세요")
      // return;
    }
    
    alert("로그인이 성공했습니다")

    history.push("/main")

    //로그인 계정정보 확인 alert
    // alert(
    //   "입력하신 아이디" + inputUserName + 
    //   "비밀번호" + inputUserPassWord +
    //   "입니다."
    // );

  };

  // 입력값을 설정하고 나중에 useState 변경값에 담는다.
  const handleChangeInputUsername = (e) =>{
    setInputUserName(e.target.value)
  };
  const handleChangeInputPassword = (e) =>{
    setInputUserPassWord(e.target.value)
  };

  // 아이디가 틀렸을때 
  // 비밀번호가 틀렸을때 
  
  //버튼 클릭 시 맞으면 로그인 성공
  //버튼 클릭 시 틀리면 로그인 실패 


  return (
    <form className="login__form">
      <input
        type="text"
        name="username"
        placeholder="Username"
        required
        onChange={ (e)=> handleChangeInputUsername(e) }
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange={ (e)=> handleChangeInputPassword(e) }
        
      />
      <button
        value="Log in"
        className="submitButton"
        onClick={ (e) => handleInputSubmitButton(e) }
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
