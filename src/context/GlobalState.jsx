import { useReducer, useContext, createContext, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

export const Context = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState,
    () => {
      const localData = localStorage.getItem("transactions");
      return localData ? JSON.parse(localData) : initialState;
    });

    useEffect(() => {
      localStorage.setItem("transactions", JSON.stringify(state));
    }, [state])

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
