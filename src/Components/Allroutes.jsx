import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Payment from "../Pages/Payment";
import Login from "../Pages/Login";
import { PrivateRoute } from "../AuthContext/PrivateRoute";
export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/detail" element={<Cart />}></Route>
        <Route path="/Checkout" element={<Checkout />}></Route>
        <Route path="/payment" element={<PrivateRoute>
          <Payment />
        </PrivateRoute>}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}
