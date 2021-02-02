import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import { default as About } from "./About";
test("About page is rendered", () => {
    const { getByTestId } = render(<About />);
    const element = getByTestId("aboutComponent");
    expect(element).toBeInTheDocument;
});
