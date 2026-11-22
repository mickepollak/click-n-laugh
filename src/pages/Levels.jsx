import { Link } from "react-router-dom";
import LevelButton from "../components/LevelButton";

function Levels() {
  return (
    <>
      <h2>Select your level</h2>
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
