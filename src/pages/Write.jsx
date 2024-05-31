import CustomCalendar from "../components/CustomCalendar"
import BackHeader from "../components/BackHeader";
import WriteTitleInput from "../components/WriteTitleInput";
import WriteContentsInput from "../components/WriteContentsInput";
import "./Write.css";
import Button from "../components/Button";

const Write = () => {
  return (
    <div className="Write">
      <BackHeader />
      <div className="WriteTitle">내일의 일기를 작성해주세요</div>
      <div className="WriteInputs">
        <CustomCalendar />
        <WriteTitleInput />
        <WriteContentsInput />
      </div>
      <Button text="작성 완료" site="loading" />
    </div>
  )
}

export default Write;