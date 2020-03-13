export const isFav = (movie, favMovies) => {
  if (!favMovies) {
    return;
  }
  return favMovies.find(item => item.imdbID === movie.imdbID);
};
