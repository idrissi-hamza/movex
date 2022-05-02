import { createContext, useReducer } from "react";

export const CtrlContext = createContext();

export const CtrlReducer = (state, action) => {
  switch (action.type) {
    case "MODAL":
      return { ...state, showModal: action.payload };
    case "PICK_MOVIE":
      return { ...state, movie: action.payload };
    case "ADD_TO_WATCHLIST":
      return { ...state, watchList: [...state.watchList, action.payload] };
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchList: [...state.watchList].filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const CtrlContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CtrlReducer, {
    watchList: [],
    showModal: false,
    movie: null,
  });

  return (
    <CtrlContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CtrlContext.Provider>
  );
};
