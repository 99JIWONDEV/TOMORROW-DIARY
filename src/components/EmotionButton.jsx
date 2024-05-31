import "./EmotionButton.css";
import { useNavigate } from "react-router-dom";


const EmotionButton = ({ emotion, site }) => {
  const navigate = useNavigate();
  const gotoSite = () => {
    navigate(`/${site}`);
  };
  console.log(site);
  return (
    <div className="EmotionButton">
      <button onClick={gotoSite}>{emotion}</button>
    </div>
  );
};

export default EmotionButton;
