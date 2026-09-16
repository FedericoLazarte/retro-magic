import Card from "../card/Card";

function CardList({ cards, onAddToCart, content }) {
  return (
    <>
      {cards.map((c) => (
        <Card key={c.id} {...c} onAddToCart={onAddToCart} content={content} />
      ))}
    </>
  );
}

export default CardList;
