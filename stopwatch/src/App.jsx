import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  let [isStarted, setIsStarted] = useState(false);
  let [time, setTime] = useState(0);
  let [str, setStr] = useState("0:00");
  let handleStartStop = () => {
    setIsStarted(!isStarted);
  };
  useEffect(() => {
    let timerId = 0;
    if (isStarted) {
      timerId = setInterval(() => {
        setTime((prev) => {
          return prev + 1;
        });
      }, 1000);
      return () => {
        if (timerId) {
          clearInterval(timerId);
        }
      };
    }
  }, [isStarted]);
  useEffect(() => {
    if (time > 0) {
      let min = Math.floor(time / 60);
      let sec = time % 60;
      if (sec < 10) {
        sec = "0" + sec;
      }
      console.log(`${min}:${sec}`);
      setStr((prev) => `${min}:${sec}`);
    }
  }, [time]);
  let handleReset = () => {
    setTime(0);
    setStr("0:00");
    setIsStarted(false);
  };
  return (
    <div className="mainDiv">
      <h1>Stopwatch</h1>
      <p>Time: {str}</p>
      <button type="button" onClick={handleStartStop} className="btn">
        {isStarted ? "Stop" : " Start"}
      </button>
      <button type="button" onClick={handleReset} className="btn">
        Reset
      </button>
    </div>
  );
}

export default App;
