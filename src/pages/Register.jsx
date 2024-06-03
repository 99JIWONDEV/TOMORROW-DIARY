import "./Register.css";
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import BackHeader from "../components/BackHeader";

const Register = () => {
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 체크

  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  }

  const handleSignup = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // 회원가입 처리 로직을 구현합니다.

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await fetch("/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nickname: nickname,
          id: id,
          password: password,
        }),
      });

      if (response.status === 200) {
        // Redirect to login.html
        alert(`회원가입 성공`);
        navigate("/login"); // 로그인 성공시 홈으로 이동합니다.
      } else if (response.status === 400) {
        // Handle error
        alert(`회원가입 실패`);
        setIsLoading(false);
      } else if (response.status === 404) {
        // Handle error
        alert(`회원가입 실패: 중복된 아이디입니다.`);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("오류 발생:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="Register">
      <BackHeader />
      <div className="RegisterTitle">회원가입</div>
      <form className="RegisterForm" onSubmit={handleSignup}>
        <input type="text" placeholder="Name" id="nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <input type="text" placeholder="ID" id="id" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="password" placeholder="PW" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="PW 확인" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </form>
        <button className="RegisterButton" onClick={handleSignup}>{isLoading ? <div>Loading...</div> : <div>등록하기</div>}</button>
        <div className="RegisterLogin" onClick={gotoLogin}>로그인</div>
    </div>
  );
};

export default Register;
