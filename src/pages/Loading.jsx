import "./Loading.css";
import {useNavigate} from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"

const Loading =()=>{
  const [emotionNum, setEmotionNum] = useState()
  const [number , setNumber] = useState(0)
  
  const navigate = useNavigate()
  // setTimeout(()=>{
  //   navigate("/myDiary")
  // }, 5000)
  const nowEmotion = sessionStorage.getItem("emotion")
  const date = sessionStorage.getItem("year") + "-" + sessionStorage.getItem("month") + "-" + sessionStorage.getItem("day")
  console.log(date)
  
  const getEmotionNum = async () => {
    try {
      const response = await axios.get(`diarys/tomorrow/${date}`)
      setEmotionNum(response.data.response.body)
    }catch(error){
      console.error(error)
    } 
  }
  useEffect(() => {
    getEmotionNum();

    const timer = setTimeout(() => {
      navigate("/myDiary");
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [date, navigate]);

  useEffect(() => {
    if (emotionNum) {
      console.log(emotionNum);
      setNumber(emotionNum[nowEmotion]-1);
    }
  }, [emotionNum]);

  return (
    <div className="Loading">
      <div className="LoadingDate">{sessionStorage.getItem("year")}년 {sessionStorage.getItem("month")}월 {sessionStorage.getItem("day")}일</div>
      <div className="LoadingDesc">{sessionStorage.getItem("nickname")}님과 같은 감정을 <br />기대하는 사람이 <span>{number}</span>명이 있습니다</div>
    </div>
  )
}

export default Loading;