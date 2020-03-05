import React from "react";

import SideBar from "./components/sidebar/sidebar";
import MainContent from "./components/main-content/main-content";
import * as Styled from "./App.styles";
import { GlobalStyles } from "./GlobalStyles";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./components/header/header";
import MovieItemDetailsContainer from "./components/movie-item-details/movie-item-details.container";
import { StateProvider } from "./context/state";
import { initialState } from "./context/initialState";

function App() {
  return (
    <StateProvider initialState={initialState}>
      <Styled.App>
        <GlobalStyles />
        <Header />
        <BrowserRouter>
          <SideBar />
          <Route path="/" component={MainContent} />
          <Route path="/movie/:id" component={MovieItemDetailsContainer} />
        </BrowserRouter>
      </Styled.App>
    </StateProvider>
  );
}

export default App;
