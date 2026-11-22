import ReactionTest from "./components/ReactionTest";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Levels from "./pages/Levels";
import Home from "./pages/Home";
import BackButton from "./components/BackButton";

function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <h1>Click n Laugh</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/levels" element={<Levels />} />
          <Route path="/levels/easy" element={<ReactionTest />} />
          <Route path="/levels/medium" element={<ReactionTest />} />
          <Route path="/levels/hard" element={<ReactionTest />} />
        </Routes>
        <BackButton></BackButton>
      </main>
    </BrowserRouter>
  );
}

export default App;
