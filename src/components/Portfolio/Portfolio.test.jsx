/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React from "react";
import { render } from "@testing-library/react";
import Portfolio from "./Portfolio";

test("Portfolio page is rendered", () => {
  const { getByTestId } = render(<Portfolio />);
  expect(getByTestId("portfolioComponent")).toBeInTheDocument;
});
