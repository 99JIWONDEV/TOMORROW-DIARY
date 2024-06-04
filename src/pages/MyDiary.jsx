import { useState } from "react";
import DiaryList from "../components/DiaryList";
import HomeHeader from "../components/HomeHeader";
import MonthCalendar from "../components/MonthCalendar";
import YearCalendar from "../components/YearCalendar";
import "./MyDiary.css";
import { useEffect } from "react";
import axios from "axios";

const MyDiary = () => {
  const [month, setMonth] = useState(sessionStorage.getItem("month"));
  const [list, setList] = useState([]);
  const userId = sessionStorage.getItem("userId");
  const date = `${sessionStorage.getItem("year")}-${month}-${sessionStorage.getItem("day")}`;
  useEffect(() => {
    const getDiaryList = async () => {
      try {
        const response = await axios.get("/diarys/calendar", {
          params: {
            userId: userId,
            date: date,
          },
        });
        setList(response.data.response.body.reverse());
      } catch (error) {
        console.error(error);
      }
    };
    getDiaryList();
  }, [month]);

  return (
    <div className="MyDiary">
      <HomeHeader />
      <div className="MyDiaryText">
        <div className="MyDiaryTitle">나의 감정일기</div>
        <div className="MyDiaryDesc">캘린더로 확인하기</div>
      </div>
      <div className="MyDiaryDate">
        <YearCalendar />
        <MonthCalendar setMonth={setMonth} />
      </div>
      <div className="MyDiaryList">
        {list.map((item) => (
          <DiaryList key={item.diaryId} id={item.diaryId} date={item.date} title={item.title} emotion={item.emotion} contents={item.content} />
        ))}
      </div>
    </div>
  );
};

export default MyDiary;
