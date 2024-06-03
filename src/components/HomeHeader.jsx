import {useNavigate} from "react-router-dom"
import "./HomeHeader.css";
import { useRecoilValue } from "recoil";
import { TitleAtom } from "../recoil/TitleAtom";
import { ContentsAtom } from "../recoil/ContentsAtom";

const HomeHeader = () => {
  const navigate = useNavigate()
  const inputTitle = useRecoilValue(TitleAtom);
  const inputContents = useRecoilValue(ContentsAtom);
  const gotoHome = () => {
    navigate("/home")
    console.log(inputTitle);
    console.log(inputContents);
  }
  return (
    <div className="HomeHeader">
      <img src="../../public/homeIcon.svg" alt="" onClick={gotoHome}/>
    </div>
  )
};

export default HomeHeader;  