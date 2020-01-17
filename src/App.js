import React from "react";
import SideBar from "./components/sidebar/sidebar";
import MainContent from "./components/main-content/main-content";
import * as Styled from "./App.styles";
import { GlobalStyles } from "./GlobalStyles";
import BackgroundImg from "./assets/background.jpg";
import { StateProvider } from "./context/state";

function App() {
  const INITIAL_STATE = {
    movies: []
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SEARCH_MOVIES":
        return {
          ...state,
          movies: action.movies
        };
      default:
        return state;
    }
  };

  return (
    <StateProvider initialState={INITIAL_STATE} reducer={reducer}>
      <Styled.App backgroundImg={BackgroundImg}>
        <GlobalStyles />
        <MainContent />
        <SideBar />
      </Styled.App>
    </StateProvider>
  );
}

export default App;
