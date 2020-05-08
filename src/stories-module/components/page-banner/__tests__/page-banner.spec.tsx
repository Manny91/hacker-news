import React from "react";
import { renderWithTheme } from "../../../../utils/render-with-theme";
import PageBanner from "../page-banner";

describe("PageBanner Component", () => {
  it("should render properly", () => {
    const subject = renderWithTheme(<PageBanner />);
    const tree = subject.container;
    expect(tree).toMatchSnapshot();
  });
});
