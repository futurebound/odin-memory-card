import { useState } from 'react';
import './App.css';

import Header from './components/Header';
import CardDisplay from './components/CardDisplay';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <Header />
      <CardDisplay />
    </div>
  );
}

export default App;
