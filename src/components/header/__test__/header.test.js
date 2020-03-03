import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../header";
import { StateProvider } from "../../../context/state";
import { initialState } from "../../../context/initialState";

test("out svg should appear as default", () => {
  const tree = (
    <StateProvider initialState={initialState}>
      <Header />
    </StateProvider>
  );
  const { container } = render(tree);
  const svg = container.querySelector("svg");
  expect(svg).toHaveTextContent("out.svg");
});
