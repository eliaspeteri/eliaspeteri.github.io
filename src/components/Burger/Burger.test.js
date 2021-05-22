/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React from "react";
import { render } from "@testing-library/react";
import Burger from "./Burger";

test("Burger page is rendered", () => {
  const { getByTestId } = render(<Burger />);
  const element = getByTestId("burgerComponent");

  expect(element).toBeInTheDocument;
});
