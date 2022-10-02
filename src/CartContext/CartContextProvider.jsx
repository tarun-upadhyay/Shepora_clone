import { createContext, useReducer } from "react";

import  {Reducer}  from "./reducer"
export const CartContext = createContext();

const initState = [];

export const CartContextProvider = ({children})=>{

    const [ cartState, cartDispatch ] = useReducer(Reducer, initState);
    
    return(
        <CartContext.Provider value={{cartState, cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}