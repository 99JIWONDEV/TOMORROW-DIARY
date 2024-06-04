import "./EmotionButton.css";
import { useNavigate } from "react-router-dom";



const EmotionButton = ({ emotion, site, name }) => {
  const navigate = useNavigate();
  const gotoSite = () => {
    if(emotion == "😃") {
      sessionStorage.setItem("emotion", "SMILE");
    }else if(emotion == "😢") {
      sessionStorage.setItem("emotion", "SO_SO");
    }else if(emotion == "😡") {
      sessionStorage.setItem("emotion", "NOT_BAD");
    }else if(emotion == "😰") {
      sessionStorage.setItem("emotion", "HAPPY");
    }else if(emotion == "🤢") {
      sessionStorage.setItem("emotion", "SAD");
    }else if(emotion == "🫢") {
      sessionStorage.setItem("emotion", "ANGRY");
    }
    navigate(`/${site}`);

  };

  

  return (
    <div className="EmotionButton">
      <button onClick={gotoSite}>{emotion}<div>{name}</div></button>
    </div>
  );
};

export default EmotionButton;
