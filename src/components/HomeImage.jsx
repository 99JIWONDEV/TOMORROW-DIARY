import "./HomeImage.css";
import backgroundImg from "../assets/background.png";
const HomeImage = () => {
  return (
    <div className="HomeImage">
      <img src={backgroundImg} alt="" />
      <div className="HomeImageTitle">내일일기</div>
      <div className="HomeImageDesc">내일의 감정을 기록해보세요</div>
    </div>
  );
};

export default HomeImage;
