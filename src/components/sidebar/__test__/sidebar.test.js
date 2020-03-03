import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Sidebar from "../sidebar";
import { StateProvider } from "../../../context/state";
import { MemoryRouter } from "react-router-dom";

test("should proper message appear when favorite movies list is empty", () => {
  const tree = (
    <StateProvider initialState={{ showSidebar: true, favMovies: [] }}>
      <Sidebar />
    </StateProvider>
  );

  const { getByTestId } = render(tree, { wrapper: MemoryRouter });
  expect(getByTestId("test-sidebar-message")).toHaveTextContent(
    /Favorite movies list is empty/i
  );
});
