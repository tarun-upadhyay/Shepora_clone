import { createContext, useReducer } from "react";
import { act } from "react-dom/test-utils";

export const AuthContext = createContext();
const initState = {
  isLoading: true,
  isAuth: false,
  token: null,
  isError: false,
  payment: true,
};
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        isAuth: true,
        token: action.payload,
        payment: false,
      };
    }
    case "LOGIN_LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "LOGIN_FAILURE": {
      return {
        ...state,
        isError: true,
      };
    }
  }
};

const AuthContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContextProvider };
export const loginLodingAction = () => ({ type: "LOGIN_LOADING" });

export const loginSuccesAction = (payload) => ({
  type: "LOGIN_SUCCESS",
  payload,
});
export const loginFailureAction = () => ({
  type: "LOGIN_FAILURE",
});
