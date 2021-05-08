import React, { useState }from "react";
import history from "../../routes/history";
import axios from 'axios';



const JoinForm = () => {

    //공백일때
    const [inputEmailOrPhone,setInputEmaiOrPhone] = useState("");
    const [inputFullName,setInputFullName] = useState("");
    const [inputUserName,setInputUserName] = useState("");
    const [inputUserPassWord,setInputUserPassWord] = useState("");

    //버튼 이벤트
    const handleSubmitButton = async (e) => {

        e.preventDefault();

        if(inputEmailOrPhone === "") {
            alert("이메일 혹은 핸드폰번호를 입력하세요");
            return;
        }

        if(inputFullName === "") {
            alert("statment를 입력하세요")
            return;
        }

        if(inputUserName === "") {
            alert("이름을 입력하세요")
            return;
        }

        if(inputUserPassWord === "") {
            alert("패스워드를 입력하세요")
            return;
        }

        const response = await axios.post('http://psmever.iptime.org:8881/join.php',{
            emailorphone : inputEmailOrPhone,
            fullnamae : inputFullName,
            username : inputUserName,
            password : inputUserPassWord
        });

        if(response.data) {
            alert('회원가입을 성공했습니다')
            history.push("/login")
        }
    };


    //이메일or핸드폰번호 입력
    const handleChangeInputEmailorPhone = (e) => {
        setInputEmaiOrPhone(e.target.value)
    };

    //풀네임 입력
    const handleChangeInputFullName = (e) => {
        setInputFullName(e.target.value)
    };

    //이름 입력
    const handleChangeInputUserName = (e) => {
        setInputUserName(e.target.value)
    };

    //비밀번호 입력
    const handleChangeInputUserPassWord = (e) => {
        setInputUserPassWord(e.target.value)
    };


    return(

        <form className="join__form">
            <input type="text" name="emailOrPhone" placeholder="Mobile phone number or email address" required
            onChange = { (e) => handleChangeInputEmailorPhone(e)}
            />
            <input type="text" name="FullName" placeholder="Statement" required
            onChange = { (e) => handleChangeInputFullName(e) }
            />
            <input type="text" name="username" placeholder="Your name" required
            onChange = { (e) => handleChangeInputUserName(e)}
            />
            <input type="password" name="password" placeholder="Password"
            onChange = { (e) => handleChangeInputUserPassWord(e) }
            required />
            <button value="Sign up" className="submitButton"
            onClick = { (e) => handleSubmitButton(e) }
            >
                Sign Up
            </button>
        </form>

    );
};

export default JoinForm;