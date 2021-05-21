import { useEffect, useState } from "react";
import {Pick, Coordinate} from "../models"
import "../game.css";
import "../results.css";
import PickIcon from '../components/PickIcon';
import EndResults from '../components/EndResults';

type Props = {
    state: boolean
    pick: Pick
    reset: () => void   
    updateScore: (point: number) => void 
    //setWinCirclePos: (pos: Coordinate) => void 
}

const Results = ({pick, state, reset, updateScore}: Props) => {
    const [cpuPick, setCpuPick] = useState(null as unknown as Pick);
    const [userPick, setUserPick] = useState(null as unknown as Pick);
    const [result, setResult] = useState(null as unknown as string);
    const [display, setDisplay] = useState(1);
    const [showCpuPick, setShowCpuPick] = useState(false);
    const [showEndResults, setShowEndResults] = useState(false);

    const noPick: Pick = {name: "nopick"};
    //const [played, setPlayed] = useState(false);

    const getCPUPick = () => {
        fetch('http://localhost:8080/cpuMove').then((response) => 
            response.json()).then(data => {
                setCpuPick(data)})
                .catch(err => console.log(err));
    }

    const playGame = () => {
        setUserPick(pick);
        getCPUPick();
    }

    const determineWinner = () => {
        if(cpuPick!=null){
            if(cpuPick.name===userPick.name){
                setResult("Tie");
                updateScore(0);
            }
            else if((userPick.name==="rock"&&cpuPick.name==="scissors")||(userPick.name==="paper"&&cpuPick.name==="rock")||(userPick.name==="scissors"&&cpuPick.name==="paper")){
                setResult("Win");
                updateScore(1);
            }
            else{
                setResult("Loss");
                updateScore(-1);
            }
        }
    }

    /*this is the code that's causing performance issues
    useEffect(() => {
        console.log("We're in the problem code.");
        if(result!==null){
            if(result!=="Tie"){
                let winCoord: Coordinate = {x:0, y:0};
                let pickPos = document.getElementById("cpupick")?.getBoundingClientRect()!;
                if(result==="Win"){
                    pickPos = document.getElementById("userpick")?.getBoundingClientRect()!;
                }
                winCoord.x = pickPos?.left;
                winCoord.y = pickPos?.top;
                setWinCirclePos(winCoord);
            }
        }
    }, [result]) */
    

    useEffect(() => {
        if(state){
            playGame();
        }
    }, [state])

    useEffect(() => {
        setDisplay(1); 
    }, [cpuPick])

    useEffect(() => {
        if (display===2){
            setShowCpuPick(true);
        }
        if (display===3){
            determineWinner();
            setShowEndResults(true);
        }
        if(display<3){
            setTimeout(() => {setDisplay(display+1);},1500);
        }
    }, [display])

    return (
        <div className = "Results">
            <div className = "User-Pick">
                <div className = "Pick-Header">YOU PICKED</div> 
                <div id = "userpick" className = "Pick-Display">
                    {(result==="Win")?<div className ="Winner-Circle"></div> :""}
                    <PickIcon pick = {userPick}/>
                </div>
            </div>

            {showEndResults?
                <EndResults result = {result} reset = {reset}/>
            : ""}

            <div className = "House-Pick">
                <div className = "Pick-Header">THE HOUSE PICKED</div> 
                <div id = "cpupick" className = "Pick-Display">
                    {(result==="Loss")?<div className ="Winner-Circle"></div> :""}
                    <PickIcon pick = {showCpuPick? cpuPick: noPick}/>
                </div>
            </div>  
        </div>
    )
}

export default Results