import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { StateProvider } from "../../../context/state";
import { initialState } from "../../../context/initialState";
import "@testing-library/jest-dom/extend-expect";
import MovieItem from "../movie-item";

test("if proper message appear when img url wasn't found", () => {
  const tree = (
    <StateProvider initialState={initialState}>
      <MovieItem movie={{ Poster: "N/A" }} />
    </StateProvider>
  );
  const { getByTestId } = render(tree, { wrapper: MemoryRouter });
  expect(getByTestId("test-img-container")).toHaveTextContent(
    /Image not found/i
  );
});

test("if proper button appear when our movie is favorite. It also checks isFav function", () => {
  const initialState = {
    favMovies: [{ imdbID: "tt0455275" }]
  };
  const tree = (
    <StateProvider initialState={initialState}>
      <MovieItem movie={{ imdbID: "tt0455275" }} />
    </StateProvider>
  );
  const { getByTestId } = render(tree, { wrapper: MemoryRouter });
  expect(getByTestId("test-btn")).toHaveTextContent(/Remove from favorites/i);
});
