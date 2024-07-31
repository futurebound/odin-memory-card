/* eslint-disable react/prop-types */
import Card from '../components/Card';

function CardDisplay({ cards, onCardClick }) {
  return (
    <div className='card-display'>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          image={card.image}
          text={card.text}
          onClick={onCardClick(card.id)}
        />
      ))}
    </div>
  );
}

export default CardDisplay;
