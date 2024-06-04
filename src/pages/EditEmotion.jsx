import BackHeader from "../components/BackHeader";
import EmotionButtons from "../components/EmotionButtons";
import { useParams } from "react-router-dom";
import "./Choose.css";

const EditEmotion = () => {
  const param = useParams();
  return (
    <div className="Choose">
      <BackHeader />
      <div className="ChooseTitle">내일의 감정은 어떨 것 같나요?</div>
      <div className="ChooseBtn">
        <EmotionButtons site={`editDiary/${param.id}`} />
      </div>
    </div>
  );
};

export default EditEmotion;
