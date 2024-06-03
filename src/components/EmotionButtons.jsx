import { useState } from "react";
import EmotionButton from "./EmotionButton";
import "./EmotionButtons.css";

const EmotionButtons = ({site}) => {
  const [emotion, setEmotion] = useState() 
  return (
    <div className="EmotionButtons">
      <div className="EmotionButtonsRow">
        <EmotionButton emotion="😃" site={site} setEmotion={setEmotion} />
        <EmotionButton emotion="😒" site={site} setEmotion={setEmotion} />
      </div>
      <div className="EmotionButtonsRow">
        <EmotionButton emotion="🥺" site={site} setEmotion={setEmotion}  />
        <EmotionButton emotion="😖" site={site} setEmotion={setEmotion}  />
      </div>
      <div className="EmotionButtonsRow">
        <EmotionButton emotion="😥" site={site} setEmotion={setEmotion} />
        <EmotionButton emotion="😡" site={site} setEmotion={setEmotion} />
      </div>
    </div>
  );
};

export default EmotionButtons;
