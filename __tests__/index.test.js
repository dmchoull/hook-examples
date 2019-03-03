import React from "react";
import { render } from "react-testing-library";
import Index from "../pages";

test("renders", () => {
  const { container } = render(<Index />);
  expect(container).toHaveTextContent("Hello");
});
