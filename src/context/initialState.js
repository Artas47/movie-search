export const initialState = {
  movies: [],
  currentMovie: null,
  isLoading: false,
  searchTerm: "",
  favMovies: JSON.parse(localStorage.getItem("favMovies")) || [],
  showSidebar: localStorage.getItem("showSidebar") === "true" ? true : false
};
