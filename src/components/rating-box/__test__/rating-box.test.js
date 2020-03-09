import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RatingBox from "../rating-box";
import { treeProvider } from "../../../helpers/treeProvider";

test("if rating wasn't found dont render rating box", () => {
  const initialState = {
    currentMovie: {
      imdbRating: "N/A",
      imdbVotes: "444,178"
    }
  };
  const { queryByTestId } = render(treeProvider(RatingBox, initialState));
  expect(queryByTestId("test-rating-number")).not.toBeInTheDocument();
});
