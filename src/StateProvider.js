// Import: Dependencies
import React, { createContext, useContext, useReducer } from "react";

// Prepare Data Layer
export const StateContext = createContext();

// Higher Order Component: StateProvider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Export: useStateValue
export const useStateValue = () => useContext(StateContext);
