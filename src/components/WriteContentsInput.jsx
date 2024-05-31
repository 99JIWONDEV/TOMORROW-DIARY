import "./WriteContentsInput.css";

const WriteContentsInput = ({contents}) => {
  return (
    <div className="WriteContentsInput">
      <textarea value={contents} placeholder="내용을 입력해주세요"/>
    </div>
  );
};

export default WriteContentsInput;
