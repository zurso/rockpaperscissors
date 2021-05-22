
import './App.css';
import Header from './components/Header'
import Game from './components/Game'
import Results from './components/Results'
import { useEffect, useState } from 'react';
import { Winstreak, Pick } from './models';
import Rules from './components/Rules';


function App() {
  const [userPick, setUserPick] = useState(null as unknown as Pick);
  const [played, setPlayed] = useState(false as boolean);
  const [score, setScore] = useState(0 as number);
  const [userStreak, setUserStreak] = useState(0 as number);
  const [topstreak, setTopstreak] = useState(null as unknown as Winstreak);
  const [rulesPopup, setRulesPopup] = useState(false as boolean);
  const [picks, setPicks] = useState(null as unknown as Pick[]);

  const passUserPick = (pick: Pick) => {
    setPlayed(true);
    setUserPick(pick);
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

  useEffect(() => {
    fetch('http://localhost:8080/picks').then((response) => 
      response.json()).then(data => {
        setPicks(data);
      });
  }, []);

  return (
    <div className="App">
        <Header score = {score} topstreak = {topstreak}/>
        {picks? <div className = "Game-Board">
          { played? <Results pick= {userPick} state = {played} reset= {resetGame} updateScore = {updateUserScore}/>
            : <Game passUserPick= {passUserPick} picks = {picks}/> }
        </div> : ""}
        <Rules popup = {rulesPopup} setRulesPopup = {setRulesPopup}/>
        <button className = "Rules-Button" onClick={() => setRulesPopup(true)}>RULES</button>
    </div>
  );
}

export default App;
