import React from "react";
import SideBar from "./components/sidebar/sidebar";
import MainContent from "./components/main-content/main-content";
import * as Styled from "./App.styles";
import { GlobalStyles } from "./GlobalStyles";
import { Route, BrowserRouter } from "react-router-dom";
import BackgroundImg from "./assets/background.jpg";
import Header from "./components/header/header";
import MovieItemDetails from "./components/movie-item-details/movie-item-details";
import { StateProvider } from "./context/state";

function App() {
  const INITIAL_STATE = {
    movies: [],
    currentMovie: null
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SEARCH_MOVIES":
        return {
          ...state,
          movies: action.movies
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
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={INITIAL_STATE} reducer={reducer}>
      <Styled.App backgroundImg={BackgroundImg}>
        <GlobalStyles />
        <Header />
        <SideBar />
        <BrowserRouter>
          <Route path="/" component={MainContent} />
          <Route path="/movie/:id" component={MovieItemDetails} />
        </BrowserRouter>
      </Styled.App>
    </StateProvider>
  );
}

export default App;
