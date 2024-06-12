import { useNavigate } from "react-router-dom";
import "./HomeHeader.css";
import homeIcon from "../../public/homeIcon.svg";

const HomeHeader = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/home");
  };
  return (
    <div className="HomeHeader">
      <img src={homeIcon} alt="" onClick={gotoHome} />
    </div>
  );
};

export default HomeHeader;
