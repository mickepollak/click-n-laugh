import { useState, useRef } from "react";

function ReactionTest() {
  const [state, setState] = useState("idle");
  const [result, setResult] = useState(null);

  const startTime = useRef(null);
  const timeout = useRef(null);

  function handleClick() {
    if (state === "idle" || state === "done") {
      setState("waiting");
      setResult(null);

      const delay = 1000 + Math.random() * 3000;

      timeout.current = setTimeout(() => {
        startTime.current = performance.now();
        setState("ready");
      }, delay);
    } else if (state === "waiting") {
      clearTimeout(timeout.current);
      setState("done");
      setResult("Too early!");
    } else if (state === "ready") {
      const reactionTime = Math.round(performance.now() - startTime.current);

      setState("done");
      setResult(`${reactionTime} ms`);
    }
  }

  const background = {
    idle: "#444",
    waiting: "#444",
    ready: "green",
    done: "#444",
  };

  return (
    <div
      className="reaction-tester"
      onClick={handleClick}
      style={{
        background: background[state],
        color: "white",
      }}
    >
      {state === "idle" && "Click to start"}
      {state === "waiting" && "Wait for green..."}
      {state === "ready" && "CLICK NOW!"}
      {state === "done" &&
        (result === "Too early!"
          ? "Too early! Click to retry."
          : `${result} - Click to retry`)}
    </div>
  );
}

export default ReactionTest;
