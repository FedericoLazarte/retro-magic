import CardContainer from "../../components/card-container/CardContainer";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <h1>Bienvenido a la tienda de Retro Magic</h1>
      <p className={styles.presentation}>
        <b>Retro Magic</b> es una tienda especializada en cartas coleccionables
        del juego <i>Arcane Duel Masters</i>, un universo estratégico inspirado
        en los clásicos TCG de combate y fantasía. Nos dedicamos a ofrecer
        cartas únicas con estética pixel art, pensadas tanto para jugadores
        competitivos como para coleccionistas que valoran el diseño y la
        identidad visual. Somos una tienda construida por apasionados de este
        tipo de juegos: entendemos la emoción de cada duelo, la importancia de
        cada carta y el valor de una buena colección. Nuestro objetivo es
        brindar una experiencia auténtica, con productos de calidad, atención
        cercana y un catálogo cuidadosamente seleccionado. En <b>Retro Magic</b>
        , no solo vendemos cartas: compartimos una cultura, una estética y una
        forma de vivir el juego.
      </p>
      <section className={styles.section}>
        <h2>Cartas a la Venta</h2>
        <CardContainer />
      </section>
    </>
  );
}

export default Home;
