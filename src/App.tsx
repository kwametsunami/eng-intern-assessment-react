import React, { useState, useEffect } from "react";

import StopWatch from "./components/StopWatch";
import StopWatchButton from "./components/StopWatchButton";

const App: React.FC = () => {
  // states
  // create states to check if the stopwatch is running or paused,
  // store the time
  // store the laps in an array
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [laps, setLaps] = useState<number[]>([]);

  // create a way to count numbers by a certain interval (milliseconds) to store into an array to display
  // have isRunning in the dependancy array to trigger counting the clock
  useEffect(() => {
    // defined as a timeout to use setTimeout to count at a certain interval
    let clockInterval: NodeJS.Timeout;

    // if statement saying if isRunning is true, let the clockinterval increase by 10 milliseconds and then store to 'time' state
    if (isRunning) {
      clockInterval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Increment by 10 milliseconds
      }, 10); // Set interval to 10 milliseconds
    }

    // cleanup function when isRunning changes
    return () => clearInterval(clockInterval);
  }, [isRunning]);

  // functions
  const startStopwatch = () => {
    setIsRunning(true);
    console.log("starting");
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    console.log("stopping");
  };

  // create a function that formats the time into mm:ss:ms to display

  return (
    <section className="App">
      <div className="stopWatchContainer">
        <StopWatchButton
          startStopwatch={startStopwatch}
          stopStopwatch={stopStopwatch}
          isRunning={isRunning}
        />
        <StopWatch time={time} />
      </div>
    </section>
  );
};

export default App;
