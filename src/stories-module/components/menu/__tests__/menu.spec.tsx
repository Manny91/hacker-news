import React from "react";
import Menu from "../menu";
import { renderWithTheme } from "../../../../utils/render-with-theme";

describe("Menu Component", () => {
  it("should render properly", () => {
    const subject = renderWithTheme(<Menu />);
    const tree = subject.container;
    expect(tree).toMatchSnapshot();
  });
});
