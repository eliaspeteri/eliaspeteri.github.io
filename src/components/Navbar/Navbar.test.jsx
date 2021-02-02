import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import { default as Navbar } from "./Navbar";
test("Navbar is rendered", () => {
    const { getByTestId } = render(<Navbar />);
    const element = getByTestId("navComponent");
    expect(element).toBeInTheDocument;
    expect(element).toContainElement(getByTestId("homeBtn"));
    expect(element).toContainElement(getByTestId("aboutBtn"));
    expect(element).toContainElement(getByTestId("portfolioBtn"));
    expect(element).toContainElement(getByTestId("contactBtn"));
});
