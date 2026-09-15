import "./App.css";
import CardContainer from "./components/card-container/CardContainer";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <>
      <Layout>
        <h1>Bienvenido a la tienda de Retro Magic</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          corrupti corporis delectus quia esse beatae est omnis! A ex laborum
          exercitationem vitae, reiciendis et consequuntur tempore veritatis,
          alias magnam placeat!
        </p>
        <CardContainer />
      </Layout>
    </>
  );
}

export default App;
