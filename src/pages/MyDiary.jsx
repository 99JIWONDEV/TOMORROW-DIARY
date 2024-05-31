import DiaryList from "../components/DiaryList";
import HomeHeader from "../components/HomeHeader";
import MonthCalendar from "../components/MonthCalendar";
import YearCalendar from "../components/YearCalendar";
import "./MyDiary.css";

const MyDiary = () => {
  return (
    <div className="MyDiary">
      <HomeHeader />
      <div className="MyDiaryText">
        <div className="MyDiaryTitle">나의 감정일기</div>
        <div className="MyDiaryDesc">캘린더로 확인하기</div>
      </div>
      <div className="MyDiaryDate">
        <YearCalendar />
        <MonthCalendar />
      </div>
      <div className="MyDiaryList">
        <DiaryList id="1" date="2024년 5월 31일" title="기대되는 내일" emotion="😃" contents="내일은 여자친구와 나들이를 가기로 했다. 사진도 찍고 김밥도 먹고 해야지 룰루. 그리고 ..." />
        <DiaryList id="2" date="2024년 5월 30일" title="걱정되는 내일" emotion="😖" contents="내일은 면접이 있는 날이다. 내가 잘 볼 수 있을지 모르겠다. 그래도 준비한 만큼 잘 하고 올 수 ..."/>
        <DiaryList id="3" date="2024년 5월 29일" title="슬플 것 같은 내일" emotion="🥲" contents="내일이 오지 않았으면 좋겠다. 그 이유는 내일은 할머니가 돌아가신 지 2년째 되는 날이다. 나는..."/>
        <DiaryList id="4" date="2024년 5월 27일" title="어쩌구 저쩌구 내일"emotion="🤬" contents="어쩌구 저쩌구 화가 난다.."/>
        <DiaryList id="5" date="2024년 5월 26일" title="걱정되는 내일" emotion="😖" contents="내일은 면접이 있는 날이다. 내가 잘 볼 수 있을지 모르겠다. 그래도 준비한 만큼 잘 하고 올 수 ..."/>
        <DiaryList id="6" date="2024년 5월 24일" title="기대되는 내일" emotion="😃" contents="내일은 여자친구와 나들이를 가기로 했다. 사진도 찍고 김밥도 먹고 해야지 룰루. 그리고 ..."/>
      </div>
    </div>
  );
}

export default MyDiary;