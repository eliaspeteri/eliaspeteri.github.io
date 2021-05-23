/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";

test("Menu is rendered", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Menu open />
    </BrowserRouter>,
  );
  const element = getByTestId("menuComponent");
  expect(element).toBeInTheDocument;
  expect(getByTestId("homeBtn")).toBeInTheDocument;
  expect(getByTestId("aboutBtn")).toBeInTheDocument;
  expect(getByTestId("portfolioBtn")).toBeInTheDocument;
  expect(getByTestId("contactBtn")).toBeInTheDocument;
});
