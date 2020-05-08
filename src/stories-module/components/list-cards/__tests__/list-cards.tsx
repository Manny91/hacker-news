import React from "react";
import { renderWithTheme } from "../../../../utils/render-with-theme";
import ListCards from "../list-cards";

describe("ListCards Component", () => {
  it("should render properly", () => {
    const subject = renderWithTheme(<ListCards />);
    const tree = subject.container;
    expect(tree).toMatchSnapshot();
  });
});
