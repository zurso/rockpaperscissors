
import './App.css';
import Header from './components/Header'
import Game from './components/Game'
import Results from './components/Results'
import React, { useEffect, useState } from 'react';
import { Winstreak, Coordinate, Pick } from './models';
import Rules from './components/Rules';


function App() {
  const [userPick, setUserPick] = useState(null as unknown as Pick);
  const [played, setPlayed] = useState(false as boolean);
  const [score, setScore] = useState(0 as number);
  const [userStreak, setUserStreak] = useState(0 as number);
  const [topstreak, setTopstreak] = useState(null as unknown as Winstreak);
  const [rulesPopup, setRulesPopup] = useState(false as boolean);
  /* const [highlightWinner, setHighlightWinner] = useState(false as boolean);
  const [winCirclePos, setWinCirclePos] = useState({x:0, y:0} as Coordinate); */

  const passUserPick = (pick: Pick) => {
    setPlayed(true);
    setUserPick(pick);
  }

  const resetGame = () => {
    setPlayed(false);
    //setHighlightWinner(false);
  }

  const updateUserScore = (point: number) => {
    setScore(point+score);
    /* if(point!==0){
      setHighlightWinner(true);
    } */
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

  /*problem code
  useEffect(() => {  
    if(highlightWinner){
      let circle: HTMLElement = document.getElementById('winnercircle')!;
      circle.style.top = winCirclePos.y+"px";
      circle.style.left = winCirclePos.x+"px";
      console.log("x: "+circle.style.left);
      console.log("y: "+circle.style.top);
    }
    
  }, [winCirclePos]); */

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
        {/*highlightWinner?
          <div id="winnercircle" className="Winner-Circle-Container">
            <div className = "Winner-Circle"></div>
          </div>
        : ""*/}
        <Header score = {score} topstreak = {topstreak}/>
        <div className = "Game-Board">
          { played? <Results pick= {userPick} state = {played} reset= {resetGame} updateScore = {updateUserScore}/>
            : <Game passUserPick= {passUserPick}/> }
        </div>
        <Rules popup = {rulesPopup} setRulesPopup = {setRulesPopup}/>
        <button className = "Rules-Button" onClick={() => setRulesPopup(true)}>RULES</button>
    </div>
  );
}

export default App;
