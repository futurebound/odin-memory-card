import { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import CardDisplay from './components/CardDisplay';

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [initialRender, setInitialRender] = useState(true);

  // API call, so useEffect() to handle
  useEffect(() => {
    if (initialRender) fetchImages();
  }, []);

  const fetchImages = async () => {
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
        text: item.title || 'Nature scene',
      }));

      setCards(newCards);
    } catch (error) {
      console.error('error fetching images: ', error);
    }

    // so we don't keep requesting images
    setInitialRender(false);
  };

  const handleCardClick = (id) => {
    console.log(`card ${id} clicked`);
  };

  return (
    <div className='app'>
      <Header currentScore={currentScore} highestScore={highestScore} />
      <CardDisplay cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
