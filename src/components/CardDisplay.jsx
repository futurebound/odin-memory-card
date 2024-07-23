/* eslint-disable react/prop-types */
import Card from '../components/Card';

function CardDisplay({ cards, onCardClick }) {
  return (
    <div className='card-display'>
      {cards.forEach((card) => {
        return (
          <Card image={card.image} text={card.text} onClick={onCardClick} />
        );
      })}
    </div>
  );
}

export default CardDisplay;
