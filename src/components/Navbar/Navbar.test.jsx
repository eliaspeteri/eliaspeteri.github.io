/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

test("Navbar is rendered", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  const element = getByTestId("navComponent");
  expect(element).toBeInTheDocument;
  expect(getByTestId("homeBtn")).toBeInTheDocument;
  expect(getByTestId("aboutBtn")).toBeInTheDocument;
  expect(getByTestId("portfolioBtn")).toBeInTheDocument;
  expect(getByTestId("contactBtn")).toBeInTheDocument;
});
