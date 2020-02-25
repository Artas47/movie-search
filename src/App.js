import React from "react";
import SideBar from "./components/sidebar/sidebar";
import MainContent from "./components/main-content/main-content";
import * as Styled from "./App.styles";
import { GlobalStyles } from "./GlobalStyles";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./components/header/header";
import MovieItemDetails from "./components/movie-item-details/movie-item-details";
import { StateProvider } from "./context/state";

function App() {
  const INITIAL_STATE = {
    movies: [],
    currentMovie: null,
    isLoading: false,
    searchTerm: "",
    favMovies: JSON.parse(localStorage.getItem("favMovies")) || [],
    showSidebar: localStorage.getItem("showSidebar") === "true" ? true : false
  };

  const reducer = (state, action) => {
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

  return (
    <StateProvider initialState={INITIAL_STATE} reducer={reducer}>
      <Styled.App>
        <GlobalStyles />
        <Header />
        <BrowserRouter>
          <SideBar />
          <Route path="/" component={MainContent} />
          <Route path="/movie/:id" component={MovieItemDetails} />
        </BrowserRouter>
      </Styled.App>
    </StateProvider>
  );
}

export default App;
