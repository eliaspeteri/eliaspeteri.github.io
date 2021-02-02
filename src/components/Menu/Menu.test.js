import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import { default as Menu } from "./Menu";
test("Menu is rendered", () => {
    const { getByTestId } = render(<Menu />);
    const element = getByTestId("menuComponent");
    expect(element).toBeInTheDocument;
    expect(element).toContainElement(getByTestId("homeBtn"));
    expect(element).toContainElement(getByTestId("aboutBtn"));
    expect(element).toContainElement(getByTestId("portfolioBtn"));
    expect(element).toContainElement(getByTestId("contactBtn"));
});
