import React, { createContext, useReducer } from "react";

let AppContext = createContext("");

const initialState = {
  cart: [],
};
let reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_CART": {
      console.log("recieved products", action.payload.item);
      return {
        ...state,
        cart: [...state.cart, action.payload.item],
      };
    }
  }
  return state;
};

function AppContextProvider(props) {
  const fullInitialState = {
    ...initialState,
  };

  let [state, dispatch] = useReducer(reducer, fullInitialState);
  let value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
