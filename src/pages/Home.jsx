import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Link to="/levels">
        <button>START GAME</button>
      </Link>
    </>
  );
}

export default Home;
