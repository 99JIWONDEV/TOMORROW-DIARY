import "./MonthCalendar.css";
const MonthCalendar = () => {

  return (
    <div className="MonthCalendar">
    <select name="month" className="MonthCalendarInput" >
      <option>01</option>
      <option>02</option>
      <option>03</option>
      <option>04</option>
      <option selected>05</option>
      <option>06</option>
      <option>07</option>
      <option>08</option>
      <option>09</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
    </select>
    <span className="MonthCalendarIcon">
      <img src="../../public/downIcon.svg" />
    </span>
  </div>
  )
}

export default MonthCalendar;