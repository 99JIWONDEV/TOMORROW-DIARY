import EmotionButton from "./EmotionButton";
import "./EmotionButtons.css";

const EmotionButtons = () => {
  return (
    <div className="EmotionButtons">
      <div className="EmotionButtonsRow">
        <EmotionButton emotion="😃" />
        <EmotionButton emotion="😒" />
      </div>
      <div className="EmotionButtonsRow">
        <EmotionButton emotion="🥺" />
        <EmotionButton emotion="😖" />
      </div>
      <div className="EmotionButtonsRow">
        <EmotionButton emotion="😥" />
        <EmotionButton emotion="😡" />
      </div>
    </div>
  );
};

export default EmotionButtons;
