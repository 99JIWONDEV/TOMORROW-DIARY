import Button from "../components/Button";
import HomeImage from "../components/HomeImage";
import UnableButton from "../components/UnableButton";
import "./BeforeLogin.css";

const BeforeLogin = () => {
  return (
    <div className="BeforeLogin">
      <HomeImage />
      <div className="BeforeLoginButtons">
        <Button text="로그인하기" site="login" />
        <UnableButton text="카카오톡으로 로그인하기" site="" />
      </div>
    </div>
  );
};

export default BeforeLogin;
