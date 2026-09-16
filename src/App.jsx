import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layouts/Layout";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
