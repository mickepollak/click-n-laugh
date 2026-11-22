import { Link } from "react-router-dom";
import "./Home.css";
import LogoImg from "../assets/logo.png";

function Home() {
  return (
    <div className="homePage">
      <h1 className="logo-wrap">
        <img className="logo" src={LogoImg} alt="Click-n-Laugh" />
      </h1>
      <p className="tagline">
        Click fast. <span>Laugh faster.</span>
      </p>
      <Link to="/levels">
        <button className="cta">START GAME</button>
      </Link>
      <span className="chip chip--1" aria-hidden="true">
        HAHA
      </span>
      <span className="chip chip--2" aria-hidden="true">
        LOL
      </span>
      <span className="chip chip--3" aria-hidden="true">
        HEHE
      </span>
      <span className="chip chip--4" aria-hidden="true">
        LMAO
      </span>
    </div>
  );
}

export default Home;
