import React from "react";

// defined props
type Props = {
  formatTime: (milliseconds: number) => string;
  time: number;
};

const StopWatch = ({ formatTime, time }: Props) => {
  return (
    <div className="stopwatch">
      <h2>{formatTime(time)}</h2>
    </div>
  );
};

export default StopWatch;
