import React from "react";
import { StateProvider } from "../context/state";
import { initialState } from "../context/initialState";

export const treeProvider = (Component, initialStateArg, ...props) => {
  return (
    <StateProvider
      initialState={initialStateArg ? initialStateArg : initialState}
    >
      <Component {...props} />
    </StateProvider>
  );
};
