import "./WriteTitleInput.css";

const WriteTitleInput = ({title}) => {
  return (
    <div className="WriteTitleInput">
      <input value ={title} type="text" placeholder="제목을 입력해주세요" className="Input"/>
    </div>
  )
}

export default WriteTitleInput  