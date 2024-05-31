import BackHeader from "../components/BackHeader";
import Button from "../components/Button";
import "./DiaryDetail.css";
import { useParams } from "react-router-dom";

const DiaryDetail = ({ date }) => {
  const param = useParams();
  console.log(param.id);
  return (
    <div className="DiaryDetail">
      <BackHeader />
      <div className="DiaryDetailTitle">년 월 일의 일기</div>
      <div className="DiaryDetailEmotion">😃</div>
      <div className="DiaryDetailInputs">
        <div className="DiaryTitle">기대되는 내일</div>
        <div className="DiaryContents">내일은 여자친구와 나들이를 가기로 했다. 사진도 찍고 김밥도 먹고 해야지 룰루. 그리고 드라이브도 해야겠다. 얼마만의 데이트인지 모르겠다. 시험기간 진짜 힘들었는데 힘을 얻어야지! 얼른 내일이 왔으면 좋겠다!!!</div>
      </div>
      <Button text="수정 하기" site={`editEmotion/${param.id}`} />
    </div>
  );
};

export default DiaryDetail;
