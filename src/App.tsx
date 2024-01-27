import React, { useState, useEffect } from "react";

import "./styles/styles.scss";

import Header from "./components/Header";
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
        // increment by 10 milliseconds
        setTime((prevTime) => prevTime + 10);
        // set interval to 10 milliseconds
      }, 10);
    }

    // cleanup function when isRunning changes
    return () => clearInterval(clockInterval);
  }, [isRunning]);

  // functions
  // onClicks to start, stop, reset, and add a lap
  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  // add lap to lap state array
  const addLap = () => {
    // store lap at current time @ press
    setLaps((prevLaps) => [...prevLaps, time]);
  };

  // create a function that formats the time into mm:ss:ms to display
  const formatTime = (milliseconds: number): string => {
    // convert ms to ss
    const totalSeconds = Math.floor(milliseconds / 1000);
    // calculate minutes by dividing totalSeconds
    const minutes = Math.floor(totalSeconds / 60);
    // take the remaining seconds after calculating minutes
    const remainingSeconds = totalSeconds % 60;
    // formats the milliseconds to limit to 2 digits
    const formattedMilliseconds = String(milliseconds % 1000)
      .padStart(3, "0")
      .slice(0, -1);
    // adds a zero to the minutes if its less than 10
    const formattedMinutes = String(minutes).padStart(2, "0");
    // adds a zero to seconds if its less than 10
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    //create a string to use as a display
    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
  };

  return (
    <main className="App">
      <Header />
      <div className="stopWatchContainer">
        <StopWatchButton
          startStopwatch={startStopwatch}
          stopStopwatch={stopStopwatch}
          resetStopwatch={resetStopwatch}
          isRunning={isRunning}
          addLap={addLap}
        />
        <StopWatch formatTime={formatTime} time={time} laps={laps} />
      </div>
    </main>
  );
};

export default App;
