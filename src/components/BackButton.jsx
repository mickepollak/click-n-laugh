import { useNavigate } from "react-router";
import "./BackButton.css";

function BackButton(props) {
  let navigate = useNavigate();
  return (
    <>
      <button className="cta" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </>
  );
}

export default BackButton;
