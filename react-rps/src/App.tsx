
import './App.css';
import Header from './components/Header'
import Game from './components/Game'
import Results from './components/Results'
import { useEffect, useState } from 'react';
import { Winstreak } from './models';

function App() {
  const [userPick, setUserPick] = useState(null as unknown as string);
  const [played, setPlayed] = useState(false as boolean);
  const [score, setScore] = useState(0 as number);
  const [userStreak, setUserStreak] = useState(0 as number);
  const [topstreak, setTopstreak] = useState(null as unknown as Winstreak);

  const shoot = (e: React.MouseEvent<HTMLElement>) => {
    setPlayed(true);
    setUserPick((e.currentTarget as HTMLInputElement).value);
  }

  const resetGame = () => {
    setPlayed(false);
  }

  const updateUserScore = (point: number) => {
    setScore(point+score);
    if(point===1){
      setUserStreak(userStreak+1);
    }
    else{
      if(userStreak>topstreak.streak){
        //post
        let w: Winstreak = {
          score: score,
          streak: userStreak
        };
        fetch('http://localhost:8080/winstreaks', {
          headers: {'content-type': 'application/json'},
          method: 'POST',
          body: JSON.stringify(w)
        });
      }
      setUserStreak(0);
    }
  }

  useEffect(() => {

    //if(!topstreak){
        fetch('http://localhost:8080/topWinstreak').then((response) => 
        response.json()).then(data => {
            setTopstreak(data);
        });
        }
      //}
    );

  return (
    <div className="App">
        <Header score = {score} topstreak = {topstreak}/>
        <div className = "Game-Board">
          { played? <Results pick= {userPick} state = {played} reset= {resetGame} updateScore = {updateUserScore}/>
            : <Game onShoot= {shoot}/> }
        </div>
      <button>RULES</button>
    </div>
  );
}

export default App;
