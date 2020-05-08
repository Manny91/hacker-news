import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "../styled-components";
import { theme } from "../theme";
import "jest-styled-components";

export const renderWithTheme = (ui: JSX.Element) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};
