import { useEffect } from "react";
import HomeHeader from "../components/HomeHeader";
import axios from "axios";
import "./TomorrowEmotion.css";
import { useState } from "react";
import dayjs from "dayjs";
const TomorrowEmotion = () => {
  const date = dayjs().add(1, "day").format("YYYY-MM-DD");
  const title = dayjs().add(1, "day").format("MM월 DD일") + " 감정 통계";
  const [emotionNum, setEmotionNum] = useState();
  const [happy, setHappy] = useState();
  const [sad, setSad] = useState();
  const [angry, setAngry] = useState();
  const [soSo, setSoSo] = useState();
  const [notBad, setNotBad] = useState();
  const [smile, setSmile] = useState();

  const getEmotionNum = async () => {
    try {
      const response = await axios.get(`diarys/tomorrow/${date}`);
      setEmotionNum(response.data.response.body);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getEmotionNum();
  }, []);

  useEffect(() => {
    if (emotionNum) {
      setHappy(emotionNum.HAPPY);
      setSad(emotionNum.SAD);
      setAngry(emotionNum.ANGRY);
      setSoSo(emotionNum.SO_SO);
      setNotBad(emotionNum.NOT_BAD);
      setSmile(emotionNum.SMILE);
    }
  }, [emotionNum]);

  return (
    <div className="TomorrowEmotion">
      <HomeHeader />
      <div className="TomorrowEmotionTitle">{title}</div>
      <div className="TomorrowEmotions">
        <div className="TomorrowEmotionsRow">
          <div className="TomorrowEmotionEach">
            <div className="EmotionIcon">😃</div>
            <div className="EmotionNum">{smile}명</div>
          </div>
          <div className="TomorrowEmotionEach">
            <div className="EmotionIcon">😢</div>
            <div className="EmotionNum">{soSo}명</div>
          </div>
        </div>
        <div className="TomorrowEmotionsRow">
          <div className="TomorrowEmotionEach">
            <div className="EmotionIcon">😡</div>
            <div className="EmotionNum">{notBad}명</div>
          </div>
          <div className="TomorrowEmotionEach">
            <div className="EmotionIcon">😰</div>
            <div className="EmotionNum">{happy}명</div>
          </div>
        </div>
        <div className="TomorrowEmotionsRow">
          <div className="TomorrowEmotionEach">
            <div className="EmotionIcon">🤢</div>
            <div className="EmotionNum">{sad}명</div>
          </div>
          <div className="TomorrowEmotionEach">
            <div className="EmotionIcon">🫢</div>
            <div className="EmotionNum">{angry}명</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TomorrowEmotion;
