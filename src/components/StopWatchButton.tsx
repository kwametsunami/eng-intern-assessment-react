import React from "react";

// defined props
type Props = {
  startStopwatch: () => void;
  stopStopwatch: () => void;
  addLap: () => void;
  resetStopwatch: () => void;
  isRunning: boolean;
};

const StopWatchButton = ({
  startStopwatch,
  stopStopwatch,
  addLap,
  resetStopwatch,
  isRunning,
}: Props) => {
  return (
    <div className="stopWatchButtonsContainer">
      <button
        className="stopwatchButton"
        id="startStopClick"
        onClick={isRunning ? stopStopwatch : startStopwatch}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        className="stopwatchButton"
        id="lapClick"
        onClick={addLap}
        disabled={!isRunning}
      >
        Lap
      </button>
      <button
        className="stopwatchButton"
        id="resetClick"
        onClick={resetStopwatch}
      >
        Reset
      </button>
    </div>
  );
};

export default StopWatchButton;
