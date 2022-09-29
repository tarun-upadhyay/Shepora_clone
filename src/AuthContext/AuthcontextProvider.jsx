import { useReducer } from "react";
import { createContext } from "react";
import {reducer} from "./Reducer"
const initState = {
    data : [],
    isAuth: false,
    error: false,
};
export const AppContext = createContext();
export const AppContextProvider = ({children})=>{
    const [ state, dispatch ] = useReducer(reducer, initState);
    const value = {state, dispatch};
    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}