import React, { useContext } from 'react';
import "./CustomCalendar.css";

const CustomCalendar = () => {
  const today = new Date();
  const todayDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
  const tomorrow = new Date(today.setDate(today.getDate() + 1));
  const tomorrowDate = `${tomorrow.getFullYear()}년 ${tomorrow.getMonth() + 1}월 ${tomorrow.getDate()}일`;




  return (
    <div className="CustomCalendar">
      <select name="date" className="CustomCalendarInput" >
        <option value={todayDate}>{todayDate}</option>
        <option value={tomorrowDate}>{tomorrowDate}</option>
      </select>
      <span className="CustomCalendarIcon">
        <img src="../../public/downIcon.svg" />
      </span>
    </div>
  )
}

export default CustomCalendar;