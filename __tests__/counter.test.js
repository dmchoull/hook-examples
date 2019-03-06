import React from "react";
import { render, fireEvent } from "react-testing-library";
import CounterPage from "../pages/counter";

test("counter starts at zero", () => {
  const { getByLabelText } = render(<CounterPage />);

  expect(getByLabelText("Count").value).toEqual("0");
});

test("increment and decrement change the count", () => {
  const { getByLabelText, getByText } = render(<CounterPage />);

  fireEvent.click(getByText("Increment"));

  expect(getByLabelText("Count").value).toEqual("1");

  fireEvent.click(getByText("Decrement"));

  expect(getByLabelText("Count").value).toEqual("0");
});

test("can't decrement to a negative count", () => {
  const { getByLabelText, getByText } = render(<CounterPage />);

  fireEvent.click(getByText("Decrement"));

  expect(getByLabelText("Count").value).toEqual("0");
});
