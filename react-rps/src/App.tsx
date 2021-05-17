
//import './App.css';
import Header from './components/Header'
import Game from './components/Game'
import Results from './components/Results'
import { useState } from 'react';

function App() {
  const [userPick, setUserPick] = useState(null as unknown as string);
  const [played, setPlayed] = useState(false as boolean);
  const [score, setScore] = useState(0 as number);

  const shoot = (e: React.MouseEvent<HTMLElement>) => {
    setPlayed(true);
    setUserPick((e.currentTarget as HTMLInputElement).value);
  }

  const resetGame = () => {
    setPlayed(false);
  }

  const updateUserScore = (point: number) => {
    setScore(point+score);
  }

  return (
    <div className="App">
      <Header score = {score}/>
      <Game onShoot= {shoot}/>
      <Results pick= {userPick} state = {played} reset= {resetGame} updateScore = {updateUserScore}/>
    </div>
  );
}

export default App;
