import "./BackHeader.css";
import { useNavigate } from "react-router-dom";

const BackHeader = () => {
  const navigate = useNavigate();
  const gotoBack = () => {
    navigate(-1);
  };

  return (
    <div className="BackHeader">
      <img src="../../public/backIcon.svg" alt="" onClick={gotoBack} />
    </div>
  );
};

export default BackHeader;
