import React from "react";
import { render } from "@testing-library/react";
import { default as Burger } from "./Burger";
test("Burger page is rendered", () => {
    const { getByTestId } = render(<Burger />);
    const element = getByTestId("burgerComponent");
    expect(element).toBeInTheDocument;
});
