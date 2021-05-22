
import "./styles/App.css";
import Header from "./components/Header"
import Game from "./components/Game"
import Results from "./components/Results"
import { useEffect, useState } from "react";
import { Winstreak, Pick } from "./models";
import Rules from "./components/Rules";


function App() {
  const [userPick, setUserPick] = useState(null as unknown as Pick);
  const [played, setPlayed] = useState(false as boolean);
  const [score, setScore] = useState(0 as number);
  const [userStreak, setUserStreak] = useState(0 as number);
  const [topstreak, setTopstreak] = useState(null as unknown as Winstreak);
  const [rulesPopup, setRulesPopup] = useState(false as boolean);
  const [picks, setPicks] = useState(null as unknown as Pick[]);

  const rulesBtnText: string = "RULES";

  const passUserPick = (pick: Pick) => {
    //possible issue with asynchronous functions here -- userPick might not be set by the time it's needed. Further investigation needed.
    setPlayed(true);
    setUserPick(pick);
  }

  const resetGame = () => {
    setPlayed(false);
  }

  const updateUserScore = (point: number) => {
    setScore(point+score);

    //Only saving a new top Winstreak when user's streak is broken.
    if(point===1){
      setUserStreak(userStreak+1);
    }
    else{
      if(userStreak>topstreak.streak){
        let w: Winstreak = {
          score: score,
          streak: userStreak
        };
        fetch("http://localhost:8080/winstreaks", {
          headers: {"content-type": "application/json"},
          method: "POST",
          body: JSON.stringify(w)
        }).catch(err => console.log(err));
      }
      setUserStreak(0);
    }
  }

  //continuously fetch the most recent top winstreak
  useEffect(() => {
        fetch("http://localhost:8080/topWinstreak").then((response) => 
        response.json()).then(data => {
            setTopstreak(data);
        }).catch(err => console.log(err));
        }
    );

  //retrieve list of picks
  useEffect(() => {
    fetch("http://localhost:8080/picks").then((response) => 
      response.json()).then(data => {
        setPicks(data);
      }).catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
        <Header score = {score} topstreak = {topstreak}/>
        {picks? <div className = "Game-Board">
                { played? <Results userPick= {userPick} state = {played} reset= {resetGame} updateScore = {updateUserScore}/>
                : <Game passUserPick= {passUserPick} picks = {picks}/> }
                </div> 
        : ""}
        <Rules popup = {rulesPopup} setRulesPopup = {setRulesPopup}/>
        <button className = "Rules-Button" onClick={() => setRulesPopup(true)}>{rulesBtnText}</button>
    </div>
  );
}

export default App;
