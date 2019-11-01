import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

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

test("clicking strike button increases strike count by one", () => {
  const { getByTestId } = render(<App />);

  fireEvent.click(getByTestId("strike-btn"));
  expect(getByTestId("strike-count")).toHaveTextContent("1");
});

test("clicking 'ball' button increases ball count by one", () => {
  const { getByTestId } = render(<App />);

  fireEvent.click(getByTestId("ball-btn"));
  expect(getByTestId("ball-count")).toHaveTextContent("1");
});

test("clicking 'foul' button increases strike count by one", () => {
  const { getByTestId } = render(<App />);

  fireEvent.click(getByTestId("foul-btn"));
  expect(getByTestId("strike-count")).toHaveTextContent("1");
});

test("clicking 'hit' button resets both counters", () => {
  const { getByTestId } = render(<App />);

  fireEvent.click(getByTestId("strike-btn"));
  fireEvent.click(getByTestId("ball-btn"));
  fireEvent.click(getByTestId("hit-btn"));
  expect(getByTestId("strike-count")).toHaveTextContent("0");
  expect(getByTestId("ball-count")).toHaveTextContent("0");
});

test("three strikes resets 'balls' and 'strikes' counters", () => {
  const { getByTestId } = render(<App />);

  fireEvent.click(getByTestId("strike-btn"));
  fireEvent.click(getByTestId("strike-btn"));
  fireEvent.click(getByTestId("strike-btn"));
  expect(getByTestId("strike-count")).toHaveTextContent("0");
  expect(getByTestId("ball-count")).toHaveTextContent("0");
});

test("four balls resets 'balls' and 'strikes' counters", () => {
  const { getByTestId } = render(<App />);

  fireEvent.click(getByTestId("ball-btn"));
  fireEvent.click(getByTestId("ball-btn"));
  fireEvent.click(getByTestId("ball-btn"));
  fireEvent.click(getByTestId("ball-btn"));
  expect(getByTestId("strike-count")).toHaveTextContent("0");
  expect(getByTestId("ball-count")).toHaveTextContent("0");
});

test("foul ball button will not increase strikes past two", () => {
  const { getByTestId } = render(<App />);

  fireEvent.click(getByTestId("foul-btn"));
  fireEvent.click(getByTestId("foul-btn"));
  fireEvent.click(getByTestId("foul-btn"));

  expect(getByTestId("strike-count")).toHaveTextContent("2");
});
