import "./App.css";
import Layout from "./components/layouts/Layout";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Layout>
        <Contact />
      </Layout>
    </>
  );
}

export default App;
