import { StatHelpText } from "@chakra-ui/react";
import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../LastContext/AppContextProvider"


export const PrivateRoute = ({children})=>{
    const {authState} = useContext(AuthContext);
    if(!authState.isAuth){
        return <Navigate to="/login"/>;
    }
    return children
}