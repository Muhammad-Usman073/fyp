import { useReducer } from "react";
import CartContext from "./Context";

const initialState = {
  totalItems: 0,
  items: [],
};
const reducer = (state, action) => {
  if (action.type === "ADD_ITEMS") {
  }
};

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItems = (items) => {
    dispatch({ type: "ADD_ITEMS", payload: items });
  };
  const removeItems = (id) => {};

  const createContext = {
    totalItems: state.totalItems,
    addItems,
    removeItems,
  };
  return (
    <CartContext.Provider value={createContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
