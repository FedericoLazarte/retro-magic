import Card from "../card/Card";
import styles from "./CardList.module.css";

function CardList({ cards, onClick, content }) {
  return (
    <div className={styles.container}>
      {cards.map((c) => (
        <Card key={c.id} {...c} onClick={() => onClick(c)} content={content} />
      ))}
    </div>
  );
}

export default CardList;
