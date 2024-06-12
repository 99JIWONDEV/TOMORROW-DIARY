import "./BackHeader.css";
import { useNavigate } from "react-router-dom";
import backIcon from "../../public/backIcon.svg";

const BackHeader = () => {
  const navigate = useNavigate();
  const gotoBack = () => {
    navigate(-1);
  };

  return (
    <div className="BackHeader">
      <img src={backIcon} alt="" onClick={gotoBack} />
    </div>
  );
};

export default BackHeader;
