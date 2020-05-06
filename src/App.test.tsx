import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import "jest-styled-components";

test("renders learn react link", () => {
  const { getByTestId } = render(<App />);
  const menu = getByTestId("menu");
  expect(menu).toBeInTheDocument();
});
