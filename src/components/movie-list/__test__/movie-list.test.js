import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { StateProvider } from "../../../context/state";
import MovieList from "../movie-list";
import { initialState } from "../../../context/initialState";
import { useStateValue } from "../../../context/state";
import { MemoryRouter } from "react-router-dom";

test("if filterMovies function removes duplicates", () => {
  const initialState = {
    movies: [
      {
        Title: "Prison Break",
        Year: "2005–2017",
        imdbID: "tt0455275",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_SX300.jpg"
      },
      {
        Title: "Prison Break",
        Year: "2005–2017",
        imdbID: "tt0455275",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_SX300.jpg"
      }
    ],
    favMovies: []
  };

  const tree = (
    <StateProvider initialState={initialState}>
      <MovieList />
    </StateProvider>
  );

  const { getByTestId } = render(tree, { wrapper: MemoryRouter });
  const items = getByTestId("test-list");
  expect(items.childElementCount).toBe(1);
});

test("if spinner shows when isLoading is true", () => {
  const initialState = {
    movies: [],
    isLoading: true
  };

  const tree = (
    <StateProvider initialState={initialState}>
      <MovieList />
    </StateProvider>
  );

  const { getByTestId } = render(tree, { wrapper: MemoryRouter });
  expect(getByTestId("test-spinner")).toBeTruthy();
});
