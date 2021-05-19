import React from "react";
import { render } from "@testing-library/react";
import { default as Resume } from "./Resume";
test("Resume is rendered", () => {
    const { getByTestId } = render(<Resume />);
    const element = getByTestId("resumeComponent");
    expect(element).toBeInTheDocument;
});
