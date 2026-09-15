import "./App.css";
import CardContainer from "./components/card-container/CardContainer";
import Layout from "./components/layouts/Layout";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

export default App;
