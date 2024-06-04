import "./WriteContentsInput.css";
import { useSetRecoilState } from "recoil";
import { ContentsAtom } from "../recoil/ContentsAtom";

const WriteContentsInput = ({ contents, setIsContents }) => {
  const setInputContents = useSetRecoilState(ContentsAtom);

  const onChange = (e) => {
    setInputContents(e.target.value);
    if (e.target.value.length > 0) {
      setIsContents(true);
    } else {
      setIsContents(false);
    }
  };

  return (
    <div className="WriteContentsInput">
      <textarea defaultValue={contents} placeholder="내용을 입력해주세요" onChange={onChange} />
    </div>
  );
};

export default WriteContentsInput;
