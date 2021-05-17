
//import './App.css';
import Header from './components/Header'
import Game from './components/Game'
import Results from './components/Results'
import { useState } from 'react';

function App() {
  const [userPick, setUserPick] = useState(null as unknown as String);
  const [played, setPlayed] = useState(false);

  const shoot = (e: React.MouseEvent<HTMLElement>) => {
    console.log((e.currentTarget as HTMLInputElement).value);
    setPlayed(true);
    setUserPick((e.currentTarget as HTMLInputElement).value);
  }

  const resetGame = () => {
    setPlayed(false);
  }

  return (
    <div className="App">
      <Header/>
      <Game onShoot= {shoot}/>
      <Results pick= {userPick} state = {played} reset= {resetGame}/>
    </div>
  );
}

export default App;
