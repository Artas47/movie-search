import React from "react";
import { render } from "@testing-library/react";
import { StateProvider } from "../../../context/state";
import { MemoryRouter } from "react-router-dom";
import { initialState } from "../../../context/initialState";
import "@testing-library/jest-dom/extend-expect";
import Modal from "../modal";

test("should modal be in the dom when movie prop is found or not", () => {
  const tree = (
    <StateProvider initialState={{ currentMovie: { imdbRating: "8.3" } }}>
      <Modal movie={{ Title: "prison", imdbRating: "8.3" }} />
    </StateProvider>
  );
  const { getByTestId, rerender, debug } = render(tree, {
    wrapper: MemoryRouter
  });
  const modalContent = getByTestId("test-modal-content");
  expect(modalContent).toBeInTheDocument();
  rerender(
    <StateProvider>
      <Modal />
    </StateProvider>
  );
  expect(modalContent).not.toBeInTheDocument();
});
