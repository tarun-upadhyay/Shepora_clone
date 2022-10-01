import { useReducer } from "react";
import { createContext } from "react";
import {reducer} from "./Reducer"
const initState = {
    data : [],
    isAuth: false,
    error: false,
    singlepagedata: [],
};
export const AppContext = createContext();
export const AppContextProvider = ({children})=>{
    const [ state, dispatch ] = useReducer(reducer, initState);
    
    return(
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}