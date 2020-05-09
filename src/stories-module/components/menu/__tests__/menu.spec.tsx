import React from "react";
import Menu from "../menu";
import { renderWithTheme } from "../../../../utils/render-with-theme";
import { MemoryRouter } from "react-router-dom";

describe("Menu Component", () => {
  it("should render properly", () => {
    const subject = renderWithTheme(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );
    const tree = subject.container;
    expect(tree).toMatchSnapshot();
  });
});
