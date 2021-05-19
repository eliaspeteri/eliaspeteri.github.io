import React from "react";
import { render } from "@testing-library/react";
import { default as About } from "./About";
test("About page is rendered", () => {
    const { getByTestId } = render(<About />);
    const element = getByTestId("aboutComponent");
    expect(element).toBeInTheDocument;
});
