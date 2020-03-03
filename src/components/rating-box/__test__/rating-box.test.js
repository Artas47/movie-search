import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RatingBox from "../rating-box";
import { StateProvider } from "../../../context/state";

test("if rating wasn't found dont render rating box", () => {
  const initialState = {
    currentMovie: {
      imdbRating: "N/A",
      imdbVotes: "444,178"
    }
  };
  const tree = (
    <StateProvider initialState={initialState}>
      <RatingBox />
    </StateProvider>
  );
  const { queryByTestId } = render(tree);
  expect(queryByTestId("test-rating-number")).not.toBeInTheDocument();
});
