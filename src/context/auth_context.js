import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/auth_reducer";
import { ADD_TOKEN, GET_TOKEN, REMOVE_TOKEN } from "../actions";

const initialState = {
  token: "",
};

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToken = (token) => {
    dispatch({ type: ADD_TOKEN, payload: token });
  };

  const removeToken = (token) => {
    dispatch({ type: REMOVE_TOKEN, payload: token });
  };

  //   const getToken = () => {
  //     dispatch({ type: GET_TOKEN });
  //   };

  return (
    <AuthContext.Provider value={{ ...state, addToken, removeToken }}>
      {children}
    </AuthContext.Provider>
  );
};
// make sure use
export const UseAuthContext = () => {
  return useContext(AuthContext);
};
