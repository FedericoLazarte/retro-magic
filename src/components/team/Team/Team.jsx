import styles from "./Team.module.css";

function Team({ name, lastname, age, position, imgUrl }) {
  return (
    <article className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={imgUrl} alt={`Foto de ${name}`} className={styles.img} />
      </div>
      <div className={styles.infoContainer}>
        <h3>
          {name} {lastname}
        </h3>
        <p>Edad: {age} años</p>
        <p>Puesto: {position}</p>
      </div>
    </article>
  );
}

export default Team;
