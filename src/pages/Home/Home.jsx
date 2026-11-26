import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firestore/config";

function Home() {
  const trackRef = useRef(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const imagesDB = collection(db, "images");

    getDocs(imagesDB)
      .then((res) => {
        setImages(
          res.docs.map((d) => {
            return { ...d.data(), id: d.id };
          }),
        );
      })
      .catch((error) => console.error(error.message));
  }, []);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth, behavior: "smooth" });
  };

  return (
    <>
      {images.length > 0 ? (
        <section className={styles.carousel}>
          <button
            className={styles.arrowLeft}
            onClick={() => scroll(-1)}
            aria-label="Anterior"
          >
            ‹
          </button>
          <div className={styles.track} ref={trackRef}>
            {images.map((i) => (
              <div className={styles.item} key={i.id}>
                <img src={i.url} alt={`Foto de carta`} />
              </div>
            ))}
          </div>
          <button
            className={styles.arrowRight}
            onClick={() => scroll(1)}
            aria-label="Siguiente"
          >
            ›
          </button>
        </section>
      ) : null}

      <h1>Bienvenido a la tienda de Retro Magic</h1>
      <p className={styles.presentation}>
        <b lang="en">Retro Magic</b> es una tienda especializada en cartas
        coleccionables del juego <i lang="en">Arcane Duel Masters</i>, un
        universo estratégico inspirado en los clásicos TCG de combate y
        fantasía. Nos dedicamos a ofrecer cartas únicas con estética{" "}
        <span lang="en">pixel art</span>, pensadas tanto para jugadores
        competitivos como para coleccionistas que valoran el diseño y la
        identidad visual. Somos una tienda construida por apasionados de este
        tipo de juegos: entendemos la emoción de cada duelo, la importancia de
        cada carta y el valor de una buena colección. Nuestro objetivo es
        brindar una experiencia auténtica, con productos de calidad, atención
        cercana y un catálogo cuidadosamente seleccionado. En{" "}
        <b lang="en">Retro Magic</b>, no solo vendemos cartas: compartimos una
        cultura, una estética y una forma de vivir el juego.
      </p>

      <section className={styles.features}>
        <h2>¿Por qué elegirnos?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🎴</span>
            <h3>Cartas originales</h3>
            <p>
              Producto oficial de Arcane Duel Masters, sin réplicas ni
              imitaciones.
            </p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🚚</span>
            <h3>Envíos a todo el país</h3>
            <p>Despachamos en 24h con seguimiento incluido en cada pedido.</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🛡️</span>
            <h3>Compra protegida</h3>
            <p>Si la carta no es lo que esperabas, te devolvemos el dinero.</p>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>⭐</span>
            <h3>Atención personalizada</h3>
            <p>
              Te asesoramos para armar el mazo perfecto según tu estilo de
              juego.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.steps}>
        <h2>Cómo comprar</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.step}>
            <span className={styles.stepNumber}>01</span>
            <h3>Explorá el catálogo</h3>
            <p>
              Navegá por las cartas disponibles y filtrá por tipo, rareza o
              expansión.
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>02</span>
            <h3>Armá tu pedido</h3>
            <p>
              Agregá tus cartas favoritas al carrito y revisá el total antes de
              pagar.
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNumber}>03</span>
            <h3>Recibí en tu casa</h3>
            <p>Te enviamos el pedido con seguimiento y embalaje protegido.</p>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>Lo que dicen nuestros clientes</h2>
        <div className={styles.testimonialsGrid}>
          <blockquote className={styles.testimonial}>
            <p>
              "Las cartas llegaron impecables y el envío fue rapidísimo. Ya armé
              mi primer mazo competitivo."
            </p>
            <footer>— Martín G., jugador competitivo</footer>
          </blockquote>
          <blockquote className={styles.testimonial}>
            <p>
              "La atención es de otro nivel. Me ayudaron a elegir cartas para mi
              colección y quedé encantado."
            </p>
            <footer>— Lucía R., coleccionista</footer>
          </blockquote>
          <blockquote className={styles.testimonial}>
            <p>
              "El arte pixel art de las cartas es único. Se nota que la tienda
              está hecha por fans."
            </p>
            <footer>— Diego M., jugador casual</footer>
          </blockquote>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>¿Listo para empezar tu colección?</h2>
        <p>Explorá el catálogo completo y encontrá tu próxima carta.</p>
        <Link to="/products" className={styles.link}>
          Ver cartas a la venta
        </Link>
      </section>
    </>
  );
}

export default Home;
