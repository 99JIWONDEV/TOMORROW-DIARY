import "./EmotionButton.css";
import { useNavigate } from "react-router-dom";


const EmotionButton = ({ emotion }) => {
  const navigate = useNavigate();
  const gotoSite = () => {
    navigate(`/write`);
  };
  return (
    <div className="EmotionButton">
      <button onClick={gotoSite}>{emotion}</button>
    </div>
  );
};

export default EmotionButton;
