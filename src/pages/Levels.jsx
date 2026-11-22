import { Link } from "react-router-dom";
import LevelButton from "../components/LevelButton";
import "./Home.css";
import "./Levels.css";

function Levels() {
  return (
    <>
      <h1 className="tagline levelSelector shine">Select your level</h1>
      <Link to={"/levels/easy"}>
        <LevelButton level="Easy"></LevelButton>
      </Link>

      <Link to={"/levels/medium"}>
        <LevelButton level="Medium"></LevelButton>
      </Link>

      <Link to={"/levels/hard"}>
        <LevelButton level="Hard"></LevelButton>
      </Link>
    </>
  );
}

export default Levels;
