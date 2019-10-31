import React from "react";
import { render } from "@testing-library/react";
import App, { addBall, addStrike, hitReset, foulBall } from "./App";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

test("App renders without crashing", () => {
  render(<App />);
});

test("Display component renders", () => {
  render(<Display />);
});

test("Dashboard component renders", () => {
  render(<Dashboard />);
});
