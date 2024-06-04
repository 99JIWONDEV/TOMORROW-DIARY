import "./Button.css";
import { useNavigate } from "react-router-dom";

const Button = ({ text, site }) => {
  const navigate = useNavigate();
  const gotoSite = () => {
    navigate(`/${site}`);
  };

  return (
    <button className="Button" onClick={gotoSite}>
      {text}
    </button>
  );
};

export default Button;
