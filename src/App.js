import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import AllRoutes from "./Components/Allroutes";
import { useContext } from "react";
import { AuthContext } from "./LastContext/AppContextProvider";
import { useParams } from "react-router-dom";
import {Footer} from "./Components/Footer"
function App() {

  
  return (
    <>
      <Navbar />
      <AllRoutes />
      <Footer/>
    </>
  );
}

export default App;
