import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SidebarItem from "../sidebar-item";
import { StateProvider } from "../../../context/state";
import { MemoryRouter } from "react-router-dom";

test("should proper message appear when movie image wasn't found", () => {
  const tree = (
    <StateProvider>
      <SidebarItem movie={{ Poster: "N/A" }} />
    </StateProvider>
  );

  const { getByTestId } = render(tree, { wrapper: MemoryRouter });
  expect(getByTestId("test-sidebarItem-message")).toHaveTextContent(
    /Image not found/i
  );
});
