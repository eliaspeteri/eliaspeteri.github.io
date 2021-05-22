/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React from "react";
import { render } from "@testing-library/react";
import About from "./About";

test("About page is rendered", () => {
  const { getByTestId } = render(<About />);
  const element = getByTestId("aboutComponent");
  expect(element).toBeInTheDocument;
});
