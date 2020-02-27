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
  return (
    <StateProvider>
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
