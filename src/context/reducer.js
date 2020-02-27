export const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_START":
      return {
        ...state,
        isLoading: true
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        movies: action.movies,
        isLoading: false
      };
    case "FETCH_MOVIE":
      return {
        ...state,
        currentMovie: action.movie
      };
    case "MOVIE_UNMOUNT":
      return {
        ...state,
        currentMovie: null
      };
    case "TOGGLE_SPINNER":
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case "SEARCH_TERM_CHANGE":
      return {
        ...state,
        searchTerm: action.searchTerm
      };
    case "ADD_FAV_MOVIE":
      return {
        ...state,
        favMovies: [...state.favMovies, action.movie]
      };
    case "REMOVE_FAV_MOVIE":
      return {
        ...state,
        favMovies: state.favMovies.filter(
          item => item.imdbID !== action.movie.imdbID
        )
      };
    case "ADD_FAV_MOVIES_LS":
      return {
        ...state,
        favMovies: action.moviesLs
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        showSidebar: action.showSidebar === "true" ? true : false
      };
    default:
      return state;
  }
};
