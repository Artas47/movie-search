import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MainContent from "../main-content";
import { treeProvider } from "../../../helpers/treeProvider";

test("default message appear", () => {
  const { getByRole } = render(treeProvider(MainContent));
  const text = getByRole("heading");
  expect(text).toHaveTextContent(/Search Movies/i);
});

test("proper message appear when movies wasn't founds", () => {
  const { getByRole } = render(
    treeProvider(MainContent, { searchTerm: "prison" })
  );
  const text = getByRole("heading");
  expect(text).toHaveTextContent(/Movies not found/i);
});
