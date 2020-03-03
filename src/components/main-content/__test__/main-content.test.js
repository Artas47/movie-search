import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { StateProvider } from "../../../context/state";
import MainContent from "../main-content";
import { initialState } from "../../../context/initialState";
import { MemoryRouter } from "react-router-dom";

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

test("message when movies wasn't found appear", () => {
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
