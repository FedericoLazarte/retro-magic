import Card from "../card/Card";

function CardList({ cards }) {
  return (
    <>
      {cards.map((c) => (
        <Card key={c.id} {...c} />
      ))}
    </>
  );
}

export default CardList;
