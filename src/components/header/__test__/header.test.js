import React from "react";
import { render, fireEvent } from "@testing-library/react";
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

test("in svg should appear when sidebar is shown", () => {
  const tree = (
    <StateProvider initialState={{ showSidebar: true }}>
      <Header />
    </StateProvider>
  );
  const { container } = render(tree);
  const svg = container.querySelector("svg");
  expect(svg).toHaveTextContent("in.svg");
});
