import "./WriteContentsInput.css";
import { useRecoilState } from "recoil";
import { ContentsAtom } from "../recoil/ContentsAtom";
import { useEffect } from "react";

const WriteContentsInput = ({contents, setIsContents}) => {
  const [inputContents, setInputContents] = useRecoilState(ContentsAtom);
  const onChange = (e) => {
    setInputContents(e.target.value);
    if (e.target.value.length > 0) {
      setIsContents(true);
    } else {
      setIsContents(false);
    }
  };
  useEffect(() => {
    console.log(inputContents);
  },[inputContents])

  return (
    <div className="WriteContentsInput" >
      <textarea value={contents} placeholder="내용을 입력해주세요" onChange={onChange}/>
    </div>
  );
};

export default WriteContentsInput;
