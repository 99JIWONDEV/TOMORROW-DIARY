import "./Loading.css";
import {useNavigate} from "react-router-dom"

const Loading =()=>{
  const navigate = useNavigate()
  setTimeout(()=>{
    navigate("/myDiary")
  }, 5000)

  return (
    <div className="Loading">
      <div className="LoadingDate">2024년 5월 31일</div>
      <div className="LoadingDesc">지원님과 같은 감정을 <br />기대하는 사람이 <span>14</span>명이 있습니다</div>
    </div>
  )
}

export default Loading;