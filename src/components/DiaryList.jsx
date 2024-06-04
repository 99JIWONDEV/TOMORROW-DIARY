import { useState } from "react";
import "./DiaryList.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DiaryList = ({ id, date, title, emotion, contents }) => {
  const [emotionIcon, setEmotionIcon] = useState("");
  const navigate = useNavigate();
  const gotoSite = () => {
    navigate(`/myDiary/${date}`);
  };
  useEffect(() => {
    if (emotion === "SMILE") {
      setEmotionIcon("😃");
    } else if (emotion === "SO_SO") {
      setEmotionIcon("😢");
    } else if (emotion === "NOT_BAD") {
      setEmotionIcon("😡");
    } else if (emotion === "HAPPY") {
      setEmotionIcon("😰");
    } else if (emotion === "SAD") {
      setEmotionIcon("🤢");
    } else if (emotion === "ANGRY") {
      setEmotionIcon("🫢");
    }
  }, [emotion]);

  return (
    <div className="DiaryList" onClick={gotoSite}>
      <div className="DiaryListDate">{date}</div>
      <div className="DiaryListTitle">
        {title} {emotionIcon}
      </div>
      <div className="DiaryListContents">{contents}</div>
    </div>
  );
};

export default DiaryList;
