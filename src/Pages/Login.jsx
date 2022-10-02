import {
  Grid,
  Box,
  FormLabel,
  Input,
  FormControl,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { CartContext } from "../CartContext/CartContextProvider";
import { useContext, useState } from "react";
import {
  AuthContext,
  loginFailureAction,
  loginLodingAction,
  loginSuccesAction,paymentdone,
} from "../LastContext/AppContextProvider";
import axios from "axios";
import { Navigate } from "react-router-dom";
const initState = { email: "", password: "" };
const Login = () => {
  const { authState, authDispatch } = useContext(AuthContext);
  const [ formData, setFormData ] = useState(initState);
  const {email, password} = formData;
  const handleChange = (e)=>{
    const {name, value } = e.target;
    setFormData({...formData, [name]:value})
  }
  const handleClick = ()=>{
    authDispatch(loginLodingAction())

    axios.post(`https://reqres.in/api/login`,{
        email: email,
        password: password,
    }).then((res)=>authDispatch(loginSuccesAction(res))).catch(()=>authDispatch(loginFailureAction()))
  }
  if(authState.isAuth){
    authDispatch(paymentdone())
  return  <Navigate to="/checkout"/>
  }
  return (
    <>
      <Box w="20%" m="auto" mt="50">
        <Grid templateColumns="repeat(1,1fr)" gap="2" w="sm">
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="email"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="password"
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <Button
                disabled={authState.isLoading}
                onClick={handleClick}
                variant="outline"
                w="full"
              >
                Login
              </Button>
            </FormControl>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
export default Login;
