import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Sidebar from "../sidebar";
import { MemoryRouter } from "react-router-dom";
import { treeProvider } from "../../../helpers/treeProvider";

test("should proper message appear when favorite movies list is empty", () => {
  const { getByTestId } = render(
    treeProvider(Sidebar, { showSidebar: true, favMovies: [] }),
    { wrapper: MemoryRouter }
  );
  expect(getByTestId("test-sidebar-message")).toHaveTextContent(
    /Favorite movies list is empty/i
  );
});
