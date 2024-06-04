import Button from "../components/Button";
import HomeImage from "../components/HomeImage";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const Logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="Home">
      <img className="HomeLogout" src="../../public/logoutIcon.svg" onClick={Logout} />
      <HomeImage />
      <div className="HomeButtons">
        <Button text="내일 일기 작성" site="choose" />
        <Button text="내일 감정 통계" site="tomorrowEmotion" />
        <Button text="나의 감정일기" site="myDiary" />
      </div>
    </div>
  );
};

export default Home;
