/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React from "react";
import { render } from "@testing-library/react";
import Resume from "./Resume";

test("Resume is rendered", () => {
  const { getByTestId } = render(<Resume />);
  const element = getByTestId("resumeComponent");
  expect(element).toBeInTheDocument;
});
