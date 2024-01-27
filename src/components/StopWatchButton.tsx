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
        id="startStopClick"
        onClick={isRunning ? stopStopwatch : startStopwatch}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button id="lapClick" onClick={addLap} disabled={!isRunning}>
        Lap
      </button>
      <button id="resetClick" onClick={resetStopwatch}>
        Reset
      </button>
    </div>
  );
};

export default StopWatchButton;
