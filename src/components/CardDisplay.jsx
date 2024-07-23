/* eslint-disable react/prop-types */
import Card from '../components/Card';

function CardDisplay({ cards, onCardClick }) {
  return (
    <div className='cardDisplay'>
      {cards.forEach((card) => {
        return (
          <Card
            className='card'
            image={card.image}
            text={card.text}
            onClick={onCardClick}
          />
        );
      })}
    </div>
  );
}

export default CardDisplay;
