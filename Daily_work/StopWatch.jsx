import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  // Convert seconds into hh:mm:ss
  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");

    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>

      <button onClick={() => setIsRunning(true)}>Start</button>

      <button
        onClick={() => setIsRunning(false)}
        style={{ margin: "0 10px" }}
      >
        Stop
      </button>

      <button
        onClick={() => {
          setIsRunning(false);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;