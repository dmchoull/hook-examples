import React from "react";
import { render, fireEvent, act } from "react-testing-library";
import EffectsPage from "../pages/effects";
import { search } from "../src/search/search";

jest.useFakeTimers();
jest.mock("../src/search/search", () => ({ search: jest.fn() }));

test("searches by title", () => {
  search.mockReturnValue(
    Promise.resolve([{ Title: "Test", Poster: "poster url" }])
  );

  const { getByLabelText } = render(<EffectsPage />);
  const titleInput = getByLabelText("Title");

  act(() => fireEvent.change(titleInput, { target: { value: "Test" } }));

  act(() => jest.runAllTimers());

  expect(search).toHaveBeenCalledWith("Test");
});
