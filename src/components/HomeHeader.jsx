import { useNavigate } from "react-router-dom";
import "./HomeHeader.css";

const HomeHeader = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/home");
  };
  return (
    <div className="HomeHeader">
      <img src="../../public/homeIcon.svg" alt="" onClick={gotoHome} />
    </div>
  );
};

export default HomeHeader;
