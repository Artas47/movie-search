import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../header";
import { treeProvider } from "../../../helpers/treeProvider";

test("out svg should appear as default", () => {
  const { container } = render(treeProvider(Header));
  const svg = container.querySelector("svg");
  expect(svg).toHaveTextContent("out.svg");
});

test("in svg should appear when sidebar is shown", () => {
  const { container } = render(treeProvider(Header, { showSidebar: true }));
  const svg = container.querySelector("svg");
  expect(svg).toHaveTextContent("in.svg");
});
