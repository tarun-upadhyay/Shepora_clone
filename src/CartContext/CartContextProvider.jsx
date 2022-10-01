import { createContext, useReducer } from "react";
import { reducer } from "../AuthContext/Reducer";

export const CartContext = createContext();
const initState = [];

export const CartContextProvider = ({})=>{
    const [ state, dispatch ] = useReducer(reducer, initState);
    return(
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}