import React from "react";
import { render } from "@testing-library/react";
import { default as Menu } from "./Menu";
import { BrowserRouter } from "react-router-dom";
test("Menu is rendered", () => {
    const { getByTestId } = render(
        <BrowserRouter>
            <Menu open={true} />
        </BrowserRouter>
    );
    const element = getByTestId("menuComponent");
    expect(element).toBeInTheDocument;
    expect(getByTestId("homeBtn")).toBeInTheDocument;
    expect(getByTestId("aboutBtn")).toBeInTheDocument;
    expect(getByTestId("portfolioBtn")).toBeInTheDocument;
    expect(getByTestId("contactBtn")).toBeInTheDocument;
});
