import { createContext, useReducer } from "react";

export const CtrlContext = createContext();

export const CtrlReducer = (state, action) => {
  switch (action.type) {
    case "MODAL":
      return { ...state, showModal: action.payload };
    case "PICK_MOVIE":
      return { ...state, movie: action.payload };
     default:
      return state;
  }
};

export const CtrlContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CtrlReducer, {
    showModal: false,
    movie: null,
  });

  return (
    <CtrlContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CtrlContext.Provider>
  );
};
