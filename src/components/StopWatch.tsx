import React from "react";

// defined props
type Props = {
  formatTime: (milliseconds: number) => string;
  time: number;
  laps: number[];
};

const StopWatch = ({ formatTime, time, laps }: Props) => {
  return (
    <section className="stopwatch">
      <div className="timeDisplay">
        <h2 className="formattedTime">{formatTime(time)}</h2>
      </div>
      <div className="laps">
        <div className="lapTitle">
          <h3 className="lapTitleFont">laps</h3>
        </div>
        {/* map out lap array from state and format it as mm:ss:ms */}
        {laps.length > 0 && (
          <div className="lapContainer" data-testid="laps">
            <ol>
              {laps.map((lap, index) => (
                <li key={index} data-testid="lap-time">
                  {formatTime(lap)}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
};

export default StopWatch;
