import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);
  let oncleckHandler = (e) => {
    if (e.target.id === "inc") {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div className="mainDiv">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button type="button" id="inc" onClick={oncleckHandler}>
        Increment
      </button>
      <button type="button" id="dec" onClick={oncleckHandler}>
        Decrement
      </button>
    </div>
  );
}

export default App;
