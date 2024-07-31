/* eslint-disable react/prop-types */
function Card({ id, image, text, onClick }) {
  return (
    <div className='card' onClick={() => onClick(id)}>
      <img src={image} alt={text} />
      <div className='card-text'>{text}</div>
    </div>
  );
}

export default Card;
