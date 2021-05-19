import React from "react";
import { render } from "@testing-library/react";
import { default as Portfolio } from "./Portfolio";
test("Portfolio page is rendered", () => {
    const { getByTestId } = render(<Portfolio />);
    expect(getByTestId("portfolioComponent")).toBeInTheDocument;
});
