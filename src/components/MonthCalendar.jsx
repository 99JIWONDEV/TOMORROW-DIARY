import "./MonthCalendar.css";
import { useState } from "react";

const MonthCalendar = ({ setMonth }) => {
  const [selectedMonth, setSelectedMonth] = useState("06"); // default month

  const onChange = (e) => {
    setSelectedMonth(e.target.value);
    setMonth(e.target.value);
  };

  return (
    <div className="MonthCalendar">
      <select
        name="month"
        className="MonthCalendarInput"
        onChange={onChange}
        defaultValue={selectedMonth} // Use defaultValue for initial selection
      >
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <span className="MonthCalendarIcon">
        <img src="../../public/downIcon.svg" />
      </span>
    </div>
  );
};

export default MonthCalendar;
