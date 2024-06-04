import "./MonthCalendar.css";
const MonthCalendar = ({setMonth}) => {
const onChange = (e) => {
    setMonth(e.target.value);
}
  return (
    <div className="MonthCalendar">
    <select name="month" className="MonthCalendarInput" onChange={onChange} >
      <option>01</option>
      <option>02</option>
      <option>03</option>
      <option>04</option>
      <option>05</option>
      <option selected>06</option>
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