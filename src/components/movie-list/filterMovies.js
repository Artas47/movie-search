//filtering movies to remove duplicates
export const filterMovies = movies => {
  return [...new Set(movies.map(movie => movie.imdbID))].map(id => {
    return movies.find(movie => movie.imdbID === id);
  });
};
