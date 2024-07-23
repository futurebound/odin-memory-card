import { useState } from 'react';
import './App.css';

import Header from './components/Header';
// import CardDisplay from './components/CardDisplay';

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  // API call, so useEffect() to handle
  // useEffect(() => { fetchImages(); }, []);

  return (
    <div className='app'>
      <Header currentScore={currentScore} highestScore={highestScore} />
      {/* <CardDisplay /> */}
    </div>
  );
}

export default App;
