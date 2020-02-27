import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
const INITIAL_STATE = {
  movies: [],
  currentMovie: null,
  isLoading: false,
  searchTerm: "",
  favMovies: JSON.parse(localStorage.getItem("favMovies")) || [],
  showSidebar: localStorage.getItem("showSidebar") === "true" ? true : false
};
export const StateContext = createContext();
export const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, INITIAL_STATE)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
