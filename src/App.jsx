import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts/Layout";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home.jsx";
import Details from "./pages/details/Details.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
