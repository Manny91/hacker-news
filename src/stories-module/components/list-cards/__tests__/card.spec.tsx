import React from "react";
import Card from "../card";

import { renderWithTheme } from "../../../../utils/render-with-theme";

describe("Card Component", () => {
  it("should render properly", () => {
    const subject = renderWithTheme(
      <Card value="$510" percentage={50} type="revenue" />
    );
    const tree = subject.container;
    expect(tree).toMatchSnapshot();
  });
});
