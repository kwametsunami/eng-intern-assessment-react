import React from "react";

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../src/App";
import StopWatch from "../src/components/StopWatch";

describe("Stopwatch", () => {
  test("renders initial state correctly", () => {
    // using a mock function to simulate the formatTime function that passes as props
    const mockFormatTime = (milliseconds) => `mocked-${milliseconds}`;

    // render that mock function into the StopWatch component for testing
    render(<StopWatch formatTime={mockFormatTime} time={0} laps={[]} />);

    expect(screen.getByText("mocked-0")).toBeInTheDocument();
  });

  test("starts and stops the stopwatch", () => {
    render(<App />);

    fireEvent.click(screen.getByText("Start"));
    expect(screen.getByText(/(\d{2}:){2}\d{2}/)).toBeInTheDocument();

    fireEvent.click(screen.getByText("Stop"));
    expect(screen.queryByText(/(\d{2}:){2}\d{2}/)).toBeInTheDocument();
  });

  test("pauses and resumes the stopwatch", () => {
    render(<App />);

    fireEvent.click(screen.getByText("Start"));
    fireEvent.click(screen.getByText("Stop"));
  });

  test("records and displays lap times", () => {
    render(<App />);

    fireEvent.click(screen.getByText("Start"));
    fireEvent.click(screen.getByText("Lap"));
    expect(screen.getByTestId("laps")).not.toContainElement(
      screen.queryAllByText(/(\d{2}:){2}\d{2}/)[0]
    );

    fireEvent.click(screen.getByText("laps"));
    const lapTimes = screen.getAllByTestId("lap-time");
    expect(lapTimes).toHaveLength(1);
  });

  test("resets the stopwatch", async () => {
    render(<App />);

    fireEvent.click(screen.getByText("Start"));
    fireEvent.click(screen.getByText("Lap"));
    fireEvent.click(screen.getByText("Reset"));

    expect(screen.getByText("00:00:00")).toBeInTheDocument();

    const lapsContainer = screen.queryByTestId("laps");
    // check if laps container is there before expecting the container to be empty
    if (lapsContainer) {
      await waitFor(() => {
        expect(lapsContainer).toBeEmptyDOMElement();
      });
    }
  });
});
