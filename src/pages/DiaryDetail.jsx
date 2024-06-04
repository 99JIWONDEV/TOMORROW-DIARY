import BackHeader from "../components/BackHeader";
import Button from "../components/Button";
import "./DiaryDetail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const DiaryDetail = () => {
  const param = useParams();
  const userId = sessionStorage.getItem("userId");
  const date = param.id;
  const [diaryContents, setDiaryContents] = useState(); // 일기 내용 저장

  const getDiaryList = async () => {
    try {
      const response = await axios.get("/diarys/detail", {
        params: {
          userId: userId,
          date: date,
        },
      });
      setDiaryContents(response.data.response.body);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDiaryList();
  }, [userId, date]);

  const emotion = diaryContents?.emotion;
  const [emotionIcon, setEmotionIcon] = useState("");
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
    <div className="DiaryDetail">
      <BackHeader />
      <div className="DiaryDetailTitle">
        {param.id.split("-")[0]}년 {param.id.split("-")[1]}월 {param.id.split("-")[2]}일 일기
      </div>
      <div className="DiaryDetailEmotion">{emotionIcon}</div>
      <div className="DiaryDetailInputs">
        <div className="DiaryTitle">{diaryContents?.title}</div>
        <div className="DiaryContents">{diaryContents?.content}</div>
      </div>
      <Button text="수정 하기" site={`editEmotion/${param.id}`} />
    </div>
  );
};

export default DiaryDetail;
