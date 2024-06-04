import "./WriteTitleInput.css";
import { useSetRecoilState } from "recoil";
import { TitleAtom } from "../recoil/TitleAtom";

const WriteTitleInput = ({ title, setIsTitle }) => {
  const setInputTitle = useSetRecoilState(TitleAtom);

  const onChange = (e) => {
    setInputTitle(e.target.value);
    if (e.target.value.length > 0) {
      setIsTitle(true);
    } else {
      setIsTitle(false);
    }
  };

  return (
    <div className="WriteTitleInput">
      <input defaultValue={title} type="text" placeholder="제목을 입력해주세요" className="Input" onChange={onChange} />
    </div>
  );
};

export default WriteTitleInput;
