import React from "react";
import { render } from "@testing-library/react";
import { default as Contact } from "./Contact";
test("Contact page is rendered", () => {
    const { getByTestId } = render(<Contact />);
    const element = getByTestId("contactComponent");
    expect(element).toBeInTheDocument;
});
