import BackHeader from "../components/BackHeader";
import WriteContentsInput from "../components/WriteContentsInput";
import WriteTitleInput from "../components/WriteTitleInput";
import { useParams } from "react-router-dom";
import "./EditDiary.css";
import { useEffect } from "react";
import { useState } from "react";
import { IsTitleAtom } from "../recoil/IsTitleAtom";
import { IsContentsAtom } from "../recoil/IsContentsAtom";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { TitleAtom } from "../recoil/TitleAtom";
import { ContentsAtom } from "../recoil/ContentsAtom";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";


const EditDiary = () => {
  const navigate = useNavigate();
  const param = useParams();
  const userId = sessionStorage.getItem("userId");
  const date = param.id;
  const title = useRecoilValue(TitleAtom);
  const contents = useRecoilValue(ContentsAtom);

  const [emotionIcon, setEmotionIcon] = useState(sessionStorage.getItem("emotion"));
  const [diaryContents, setDiaryContents] = useState();
  const isTitle = useRecoilValue(IsTitleAtom);
  const isContents = useRecoilValue(IsContentsAtom);
  const setIsTitle = useSetRecoilState(IsTitleAtom);
  const setIsContents = useSetRecoilState(IsContentsAtom);
  const inputTitle = useRecoilValue(TitleAtom);
  const setInputTitle = useSetRecoilState(TitleAtom);
  const inputContents = useRecoilValue(ContentsAtom);
  const setInputContents = useSetRecoilState(ContentsAtom);

  console.log(isTitle, isContents);

  useEffect(() => {
    if (emotionIcon === "SMILE") {
      setEmotionIcon("😃");
    } else if (emotionIcon === "SO_SO") {
      setEmotionIcon("😢");
    } else if (emotionIcon === "NOT_BAD") {
      setEmotionIcon("😡");
    } else if (emotionIcon === "HAPPY") {
      setEmotionIcon("😰");
    } else if (emotionIcon === "SAD") {
      setEmotionIcon("🤢");
    } else if (emotionIcon === "ANGRY") {
      setEmotionIcon("🫢");
    }
  }, [emotionIcon]);
  

  const onClick = async (e) => {
    e.preventDefault();
    console.log(`${sessionStorage.getItem("year")}-${sessionStorage.getItem("month").replaceAll(" ", "")}-${sessionStorage.getItem("day").replaceAll(" ", "")}`);
    try {
      const response = await fetch("/diarys/modify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: sessionStorage.getItem("userId").replaceAll(" ", ""),
          date: date,
          title: title,
          content: contents,
          emotion: sessionStorage.getItem("emotion").replaceAll(" ", ""),
        }),
      });

      if (response.status === 200) {
        navigate("/loading"); // 로그인 성공시 홈으로 이동합니다.
      } else if (response.status === 400) {
        alert(`등록 실패`);
      } else if (response.status === 404) {
        alert(`등록 실패`);
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  const getDiaryList = async () => {
    try {
      const response = await axios.get("/diarys/detail", {
        params: {
          userId: userId,
          date: date,
        },
      });
      setDiaryContents(response.data.response.body);
      setIsTitle(true);
      setIsContents(true);
      setInputTitle(response.data.response.body.title);
      setInputContents(response.data.response.body.content);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getDiaryList();
  }, [userId, date]);

  console.log(inputTitle, inputContents);




  sessionStorage.setItem("year", param.id.split("-")[0]);
  sessionStorage.setItem("month", param.id.split("-")[1]);
  sessionStorage.setItem("day", param.id.split("-")[2]);
  return (
    <div className="Edit">
      <BackHeader />
      <div className="EditTitle">
        {param.id.split("-")[0]}년 {param.id.split("-")[1]}월 {param.id.split("-")[2]}일 일기
      </div>
      <div className="EditEmotion">{emotionIcon}</div>
      <div className="EditInputs">
        <WriteTitleInput title={diaryContents?.title} setIsTitle={setIsTitle}  />
        <WriteContentsInput contents={diaryContents?.content} setIsContents={setIsContents}/>
      </div>
      {isTitle && isContents ? <button onClick={onClick}>작성완료</button> : <button style={{ backgroundColor: "#AEAEAE", cursor: "default" }}>작성완료</button>}
    </div>
  );
};

export default EditDiary;
