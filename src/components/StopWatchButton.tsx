import React from "react";

// defined props
type Props = {
  startStopwatch: () => void;
  stopStopwatch: () => void;
  isRunning: boolean;
};

const StopWatchButton = ({
  startStopwatch,
  stopStopwatch,
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
      <button id="lapClick">lap</button>
      <button id="resetClick">reset</button>
    </div>
  );
};

export default StopWatchButton;
