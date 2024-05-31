import "./DiaryList.css";
import { useNavigate } from "react-router-dom";

const DiaryList = ({ id, date, title, emotion, contents }) => {
  const navigate = useNavigate();
  const gotoSite = () => {
    navigate(`/myDiary/${id}`);
  };
  return (
    <div className="DiaryList" onClick={gotoSite}>
      <div className="DiaryListDate">{date}</div>
      <div className="DiaryListTitle">
        {title} {emotion}
      </div>
      <div className="DiaryListContents">{contents}</div>
    </div>
  );
};

export default DiaryList;
