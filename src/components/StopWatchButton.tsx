import React from "react";

// defined props
type Props = {
  startStopwatch: () => void;
  stopStopwatch: () => void;
  addLap: () => void;
  isRunning: boolean;
};

const StopWatchButton = ({
  startStopwatch,
  stopStopwatch,
  addLap,
  isRunning,
}: Props) => {
  return (
    <div className="stopWatchButtonsContainer">
      <button
        id="startStopClick"
        onClick={isRunning ? stopStopwatch : startStopwatch}
      >
        {isRunning ? "stop" : "start"}
      </button>
      <button id="lapClick" onClick={addLap} disabled={!isRunning}>
        lap
      </button>
      <button id="resetClick">reset</button>
    </div>
  );
};

export default StopWatchButton;
