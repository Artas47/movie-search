import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { StateProvider } from "../../../context/state";
import MainContent from "../main-content";
import { initialState } from "../../../context/initialState";

test("default message appear", () => {
  const tree = (
    <StateProvider initialState={initialState}>
      <MainContent />
    </StateProvider>
  );
  const { getByRole } = render(tree);
  const text = getByRole("heading");
  expect(text).toHaveTextContent(/Search Movies/i);
});

test("proper message appear when movies wasn't founds", () => {
  const initialState = {
    searchTerm: "prison"
  };
  const tree = (
    <StateProvider initialState={initialState}>
      <MainContent />
    </StateProvider>
  );
  const { getByRole } = render(tree);
  const text = getByRole("heading");
  expect(text).toHaveTextContent(/Movies not found/i);
});
