import Button from "../components/Button"
import HomeImage from "../components/HomeImage"
import "./Home.css"

const Home = () => {

  return(
    <div className="Home">
      <HomeImage />
      <div className="HomeButtons">
        <Button text= "내일 일기 작성" site="choose" />
        <Button text = "내일 감정 통계" site="statistics"/>
        <Button text = "나의 감정일기" site="myDiary" />
      </div>
    </div>
  )
}

export default Home