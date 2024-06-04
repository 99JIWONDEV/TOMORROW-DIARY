import React, { useContext } from "react";
import "./CustomCalendar.css";
import { IsTodayAtom } from "../recoil/IsTodayAtom";
import { useRecoilValue } from "recoil";
import { IsTomorrowAtom } from "../recoil/IsTomorrowAtom";

const CustomCalendar = () => {
  const today = new Date();
  const todayDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
  const tomorrow = new Date(today.setDate(today.getDate() + 1));
  const tomorrowDate = `${tomorrow.getFullYear()}년 ${tomorrow.getMonth() + 1}월 ${tomorrow.getDate()}일`;


  const onChange = (e) => {
    if (e.target.value.split("년")[1].split("월")[0].replaceAll(" ", "") < 10) {
      sessionStorage.setItem("month", `0${e.target.value.split("년")[1].split("월")[0].replaceAll(" ", "")}`);
    } else {
      sessionStorage.setItem("month", e.target.value.split("년")[1].split("월")[0].replaceAll(" ", ""));
    }
    if (e.target.value.split("년")[1].split("월")[1].split("일")[0].replaceAll(" ", "") < 10) {
      sessionStorage.setItem("day", `0${e.target.value.split("년")[1].split("월")[1].split("일")[0].replaceAll(" ", "")}`);
    } else {
      sessionStorage.setItem("day", e.target.value.split("년")[1].split("월")[1].split("일")[0].replaceAll(" ", ""));
    }
    sessionStorage.setItem("year", e.target.value.split("년")[0].replaceAll(" ", ""));
  };

  return (
    <div className="CustomCalendar">
      <select name="date" className="CustomCalendarInput" onChange={onChange}>
        <option value={tomorrowDate}>{tomorrowDate}</option>
        <option value={todayDate}>{todayDate}</option>
      </select>
      <span className="CustomCalendarIcon">
        <img src="../../public/downIcon.svg" />
      </span>
    </div>
  );
};

export default CustomCalendar;
