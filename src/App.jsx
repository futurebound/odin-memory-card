import { useState, useEffect, useCallback } from 'react';
import './App.css';

import Header from './components/Header';
import CardDisplay from './components/CardDisplay';

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);

  const fetchImages = useCallback(async () => {
    try {
      const endpoint = 'https://api.giphy.com/v1/gifs/search';
      const params = {
        apiKey: import.meta.env.VITE_GIPHY_KEY,
        term: 'nature',
        limit: 12,
        rating: 'g',
      };
      const queryUri = `?api_key=${params.apiKey}&q=${params.term}&limit=${params.limit}&rating=${params.rating}`;
      const response = await fetch(`${endpoint}${queryUri}`);
      const parsed = await response.json();

      const newCards = parsed.data.map((item) => ({
        id: item.id,
        image: item.images.fixed_height.url,
        text: item.title || 'Nature gif',
      }));

      setCards(newCards);
    } catch (error) {
      console.error('error fetching images: ', error);
    }
  }, []);

  // API call, so useEffect() to handle
  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const resetGame = () => {
    setCurrentScore(0);
    setClickedCards([]);
    fetchImages();
  };

  const handleCardClick = (id) => {
    // Game is over if click on a card user clicked already
    if (clickedCards.includes(id)) {
      if (currentScore > highestScore) {
        setHighestScore(currentScore);
      }
      resetGame();
    } else {
      setClickedCards([...clickedCards, id]);
      setCurrentScore(currentScore + 1);
      shuffleCards();
    }
  };

  const shuffleCards = () => {
    console.log('shuffling cards...');
  };

  return (
    <div className='app'>
      <Header currentScore={currentScore} highestScore={highestScore} />
      <CardDisplay cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
