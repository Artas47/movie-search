import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MovieList from "../movie-list";
import { MemoryRouter } from "react-router-dom";
import { treeProvider } from "../../../helpers/treeProvider";

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

  const { getByTestId } = render(treeProvider(MovieList, initialState), {
    wrapper: MemoryRouter
  });
  const items = getByTestId("test-list");
  expect(items.childElementCount).toBe(1);
});

test("if spinner shows when isLoading is true", () => {
  const initialState = {
    movies: [],
    isLoading: true
  };

  const { getByTestId } = render(treeProvider(MovieList, initialState), {
    wrapper: MemoryRouter
  });
  expect(getByTestId("test-spinner")).toBeInTheDocument();
});
