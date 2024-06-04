import BackHeader from "../components/BackHeader";
import EmotionButtons from "../components/EmotionButtons";
import "./Choose.css";




const Choose = () => {
  return (
    <div className="Choose">
      <BackHeader />
      <div className="ChooseTitle">내일의 감정은 어떨 것 같나요?</div>
      <div className="ChooseBtn">
        <EmotionButtons site="write" />
      </div>
    </div>
  );  
}

export default Choose;