import EmotionButton from "./EmotionButton";
import "./EmotionButtons.css";

const EmotionButtons = ({site}) => {
  return (
    <div className="EmotionButtons">
      <div className="EmotionButtonsRow">
        <EmotionButton emotion="😃" site={site} />
        <EmotionButton emotion="😒" site={site} />
      </div>
      <div className="EmotionButtonsRow">
        <EmotionButton emotion="🥺" site={site}/>
        <EmotionButton emotion="😖" site={site}/>
      </div>
      <div className="EmotionButtonsRow">
        <EmotionButton emotion="😥" site={site}/>
        <EmotionButton emotion="😡" site={site}/>
      </div>
    </div>
  );
};

export default EmotionButtons;
