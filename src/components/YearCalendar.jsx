import "./YearCalendar.css";
import downIcon from "../../public/downIcon.svg";
const YearCalendar = () => {
  return (
    <div className="YearCalendar">
      <select name="year" className="YearCalendarInput">
        <option>2024</option>
      </select>
      <span className="YearCalendarIcon">
        <img src={downIcon} />
      </span>
    </div>
  );
};

export default YearCalendar;
