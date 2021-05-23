/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React from "react";
import { render } from "@testing-library/react";
import Contact from "./Contact";

test("Contact page is rendered", () => {
  const { getByTestId } = render(<Contact />);
  const element = getByTestId("contactComponent");
  expect(element).toBeInTheDocument;
});
