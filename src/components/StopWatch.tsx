import React from "react";

// defined props
type Props = {
  time: number;
};

const StopWatch = ({ time }: Props) => {
  return (
    <div className="stopwatch">
      <h2>{time}</h2>
    </div>
  );
};

export default StopWatch;
