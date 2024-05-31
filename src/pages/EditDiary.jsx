import BackHeader from "../components/BackHeader";
import Button from "../components/Button";
import WriteContentsInput from "../components/WriteContentsInput";
import WriteTitleInput from "../components/WriteTitleInput";
import "./EditDiary.css";

const EditDiary = () => {
  return (
    <div className="Edit">
      <BackHeader />
      <div className="EditTitle">년 월 일의 일기</div>
      <div className="EditEmotion">😢</div>
      <div className="EditInputs">
        <WriteTitleInput title="기대되는 내일" />
        <WriteContentsInput contents="내일은 여자친구와 나들이를 가기로 했다. 사진도 찍고 김밥도 먹고 해야지 룰루. 그리고 드라이브도 해야겠다. 얼마만의 데이트인지 모르겠다. 시험기간 진짜 힘들었는데 힘을 얻어야지! 얼른 내일이 왔으면 좋겠다!!!" />
      </div>
      <Button text="수정 완료" site="" />
    </div>
  );
};

export default EditDiary;
