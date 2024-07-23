/* eslint-disable react/prop-types */
import Instructions from '../components/Instructions';
import Scoreboard from '../components/Scoreboard';

function Header({ currentScore, highestScore }) {
  return (
    <div className='header'>
      <Instructions />
      <Scoreboard currentScore={currentScore} highestScore={highestScore} />
    </div>
  );
}

export default Header;
