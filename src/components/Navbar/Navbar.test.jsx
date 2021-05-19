import React from "react";
import { render } from "@testing-library/react";
import { default as Navbar } from "./Navbar";
import { BrowserRouter } from "react-router-dom";
test("Navbar is rendered", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Navbar />
        </BrowserRouter>
    );
    const element = getByTestId("navComponent");
    expect(element).toBeInTheDocument;
    expect(getByTestId("homeBtn")).toBeInTheDocument;
    expect(getByTestId("aboutBtn")).toBeInTheDocument;
    expect(getByTestId("portfolioBtn")).toBeInTheDocument;
    expect(getByTestId("contactBtn")).toBeInTheDocument;
});
