import CustomCalendar from "../components/CustomCalendar";
import BackHeader from "../components/BackHeader";
import WriteTitleInput from "../components/WriteTitleInput";
import WriteContentsInput from "../components/WriteContentsInput";
import "./Write.css";
import { useNavigate } from "react-router-dom";
import { TitleAtom } from "../recoil/TitleAtom";
import { useRecoilValue } from "recoil";
import { ContentsAtom } from "../recoil/ContentsAtom";
import { IsTitleAtom } from "../recoil/IsTitleAtom";
import { IsContentsAtom } from "../recoil/IsContentsAtom";
import { useRecoilState } from "recoil";



const Write = () => {
  const title = useRecoilValue(TitleAtom);
  const contents = useRecoilValue(ContentsAtom);
  const navigate = useNavigate();
  const [isTitle, setIsTitle] = useRecoilState(IsTitleAtom);
  const [isContents, setIsContents] = useRecoilState(IsContentsAtom);
  const onClick = async (e) => {
    e.preventDefault();
    console.log(`${sessionStorage.getItem("year")}-${sessionStorage.getItem("month").replaceAll(" ", "")}-${sessionStorage.getItem("day").replaceAll(" ", "")}`);
    try {
      const response = await fetch("/diarys/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: sessionStorage.getItem("userId").replaceAll(" ", ""),
          date: `${sessionStorage.getItem("year")}-${sessionStorage.getItem("month").replaceAll(" ", "")}-${sessionStorage.getItem("day").replaceAll(" ", "")}`,
          title: title,
          content: contents,
          emotion: sessionStorage.getItem("emotion").replaceAll(" ", ""),
        }),
      });

      if (response.status === 200) {
        navigate("/loading"); // 로그인 성공시 홈으로 이동합니다.
      } else if (response.status === 400) {
        alert(`등록 실패`);
      } else if (response.status === 404) {
        alert(`등록 실패`);
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };
  
  return (
    <div className="Write">
      <BackHeader />
      <div className="WriteTitle">내일의 일기를 작성해주세요</div>
      <div className="WriteInputs">
        <CustomCalendar/>
        <WriteTitleInput setIsTitle={setIsTitle} />
        <WriteContentsInput setIsContents={setIsContents} />
      </div>
      {isTitle && isContents ? <button onClick={onClick}>작성완료</button> : <button style={{ backgroundColor: "#AEAEAE", cursor: "default" }}>작성완료</button>}
    </div>
  );
};

export default Write;
