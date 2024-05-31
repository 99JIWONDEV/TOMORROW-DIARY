import "./YearCalendar.css";
const YearCalendar = () => {

  return (
    <div className="YearCalendar">
    <select name="year" className="YearCalendarInput" >
      <option>2024</option>
    </select>
    <span className="YearCalendarIcon">
      <img src="../../public/downIcon.svg" />
    </span>
  </div>
  )
}

export default YearCalendar;