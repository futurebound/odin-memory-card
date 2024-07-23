/* eslint-disable react/prop-types */
function Scoreboard({ currentScore, highestScore }) {
  return (
    <div className='scoreboard'>
      <h1>Current Score: {currentScore}</h1>
      <h1>Highest Score: {highestScore}</h1>
    </div>
  );
}

export default Scoreboard;
