import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout/Layout";
import Home from "./pages/Home/Home.jsx";
import Details from "./pages/Details/Details.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import NewProduct from "./pages/NewProduct/NewProduct.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/newproduct" element={<NewProduct />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
