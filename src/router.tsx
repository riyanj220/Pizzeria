import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Order, { orderLoader } from "./pages/Order";
import { RootLayout } from "./components/RootLayout";
import OrderNotFound from "./pages/OrderNotFound";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/Pizzeria" element={<RootLayout />}>
            <Route path="/Pizzeria" element= {<Home/>} />
            <Route path="menu" element= {<Menu/>} />
            <Route path="cart" element= {<Cart/>} />
            <Route path="checkout" element= {<Checkout/>} />
            <Route loader={orderLoader} errorElement={<OrderNotFound/>} path="order/:orderId" element= {<Order/>} />
        </Route>
    ),
)