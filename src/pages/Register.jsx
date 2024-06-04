import "./Register.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackHeader from "../components/BackHeader";
import { useEffect } from "react";

const Register = () => {
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isId, setIsId] = useState(false);
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    if (password.match(passwordRegEx) === null) {
      setPasswordCheck(false);
    } else {
      setPasswordCheck(true);
    }
  });

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  useEffect(() => {
    if (nickname === "") {
      setIsNickname(false);
    } else {
      setIsNickname(true);
    }
  }, [nickname]);

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  useEffect(() => {
    if (id === "") {
      setIsId(false);
    } else {
      setIsId(true);
    }
  }, [id]);

  const handleSignup = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // 회원가입 처리 로직을 구현합니다.

    if (!isNickname) {
      alert("이름을 입력해주세요.");
      setIsLoading(false);
      return;
    }

    if (!isId) {
      alert("아이디를 입력해주세요.");
      setIsLoading(false);
      return;
    }

    if (!passwordCheck) {
      alert("비밀번호를 형식에 맞게 입력해주세요");
      setIsLoading(false);
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      setIsLoading(false);
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
        <input type="text" placeholder="Name" id="nickname" value={nickname} onChange={onChangeNickname} />
        <input type="text" placeholder="ID" id="id" value={id} onChange={onChangeId} />
        <input type="password" placeholder="PW" id="password" value={password} onChange={onChangePassword} />
        {passwordCheck ? null : <div style={{ color: "red", fontSize: "12px" }}>비밀번호는 8~20자의 영문 대소문자와 숫자로만 입력해주세요.</div>}
        <input type="password" placeholder="PW 확인" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </form>
      <button className="RegisterButton" onClick={handleSignup}>
        {isLoading ? <div>Loading...</div> : <div>등록하기</div>}
      </button>
      <div className="RegisterLogin" onClick={gotoLogin}>
        로그인
      </div>
    </div>
  );
};

export default Register;
