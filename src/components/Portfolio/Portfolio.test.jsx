import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";
import { default as Portfolio } from "./Portfolio";
test("Portfolio page is rendered", () => {
    const { getByTestId } = render(<Portfolio />);
    const element = getByTestId("portfolioComponent");
    const github = getByTestId("githubElement");
    const easyProj = getByTestId("easyProjElement");
    expect(element).toBeInTheDocument;
    expect(github).toBeInTheDocument;
    expect(easyProj).toBeInTheDocument;
});