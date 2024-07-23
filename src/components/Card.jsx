/* eslint-disable react/prop-types */
function Card({ image, text, onClick }) {
  return (
    <div className='card' onClick={onClick}>
      <img src={image} alt={text} />
      <div className='card-text'>{text}</div>
    </div>
  );
}

export default Card;
