import "./WriteTitleInput.css";
import { useRecoilState } from "recoil";
import { TitleAtom } from "../recoil/TitleAtom";
import { useEffect } from "react";


const WriteTitleInput = ({ title, setIsTitle }) => {
  const [inputTitle, setInputTitle] = useRecoilState(TitleAtom);
  const onChange = (e) => {
    setInputTitle(e.target.value);
    if (e.target.value.length > 0) {
      setIsTitle(true);
    } else {
      setIsTitle(false);
    }
  };
  useEffect(() => {
    console.log(inputTitle);
  },[inputTitle])
  return (
    <div className="WriteTitleInput">
      <input value={title} type="text" placeholder="제목을 입력해주세요" className="Input" onChange={onChange} />
    </div>
  );
};

export default WriteTitleInput;
