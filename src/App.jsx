import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Choose from "./pages/Choose";
import Write from "./pages/Write";
import Loading from "./pages/Loading";
import MyDiary from "./pages/MyDiary";
import DiaryDetail from "./pages/DiaryDetail";
import EditEmotion from "./pages/EditEmotion";
import EditDiary from "./pages/EditDiary";
import Login from "./pages/Login";
import BeforeLogin from "./pages/BeforeLogin";
import Register from "./pages/Register";
import TomorrowEmotion from "./pages/TomorrowEmotion";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BeforeLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/tomorrowEmotion" element={<TomorrowEmotion />} />
        <Route path="/editEmotion/:id" element={<EditEmotion />} />
        <Route path="/write" element={<Write />} />
        <Route path="/editDiary/:id" element={<EditDiary />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/myDiary" element={<MyDiary />} />
        <Route path="/myDiary/:id" element={<DiaryDetail />} />
      </Routes>
    </>
  );
}

export default App;
