import React, {useState} from 'react';
import Pokemon from './components/pokemon';
import './App.css';

function App() {
  const [pokemon] = useState([])

  return (
    <div className="App">
      <Pokemon state={pokemon}/>
    </div>
  );
}

export default App;
