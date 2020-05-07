import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import "jest-styled-components";

test("renders app menu", () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
  const { getByTestId } = render(<App />);
  const menu = getByTestId("menu");
  expect(menu).toBeInTheDocument();
});
