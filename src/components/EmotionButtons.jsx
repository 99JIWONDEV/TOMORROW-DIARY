import EmotionButton from "./EmotionButton";
import "./EmotionButtons.css";

const EmotionButtons = ({site}) => {
  return (
    <div className="EmotionButtons">
      <div className="EmotionButtonsRow">
        <EmotionButton emotion="😃" name="기쁨" site={site}  />
        <EmotionButton emotion="😢" name="슬픔"site={site}  />
      </div>
      <div className="EmotionButtonsRow">
        <EmotionButton emotion="😡" name="분노" site={site}   />
        <EmotionButton emotion="😰" name="공포" site={site}   />
      </div>
      <div className="EmotionButtonsRow">
        <EmotionButton emotion="🤢" name="혐오" site={site} />
        <EmotionButton emotion="🫢" name="놀람" site={site} />
      </div>
    </div>
  );
};

export default EmotionButtons;
