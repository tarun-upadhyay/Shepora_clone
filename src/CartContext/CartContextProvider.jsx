import { createContext, useReducer } from "react";

import  {reducer}  from "./Reducer"
export const CartContext = createContext();

const initState = [];

export const CartContextProvider = ({children})=>{

    const [ cartState, cartDispatch ] = useReducer(reducer, initState);
    
    return(
        <CartContext.Provider value={{cartState, cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}