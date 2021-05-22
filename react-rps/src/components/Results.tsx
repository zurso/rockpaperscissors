import { useEffect, useState } from "react";
import {Pick} from "../models"
import "../styles/game.css";
import "../styles/results.css";
import PickIcon from "../components/PickIcon";
import EndResults from "../components/EndResults";

type Props = {
    state: boolean
    userPick: Pick
    reset: () => void   
    updateScore: (point: number) => void 
}

//Component for displaying results with timed changes to the display

const Results = ({userPick, state, reset, updateScore}: Props) => {
    const [cpuPick, setCpuPick] = useState(null as unknown as Pick);
    const [result, setResult] = useState(null as unknown as string);
    const [display, setDisplay] = useState(1);

    const noPick: Pick = {id: 0, name: "nopick", beats: 0};
    const waitTime: number = 1500;
    const userPickText: string = "YOU PICKED";
    const cpuPickText: string = "THE HOUSE PICKED";

    //gets the House's pick from api
    const getCPUPick = () => {
        fetch("http://localhost:8080/cpuMove").then((response) => 
            response.json()).then(data => {
                setCpuPick(data)})
                .catch(err => console.log(err));
    }

    const determineWinner = () => {
        if(cpuPick!=null){
            if(userPick.beats===cpuPick.id){
                setResult("Win");
                updateScore(1);
            }
            else if(cpuPick.beats===userPick.id){
                setResult("Loss");
                updateScore(-1);
            }
            else{
                setResult("Tie");
                updateScore(0);
            }
        }
    }
    

    //possibly unnecesary, but app slows down considerably if this useEffect is removed. Needs more investigation
    useEffect(() => {
        if(state){
            getCPUPick();
        }
    }, [state])

    //only begin the process of changing the display and ultimately determining winner once cpuPick is set
    useEffect(() => {
        setDisplay(1); 
    }, [cpuPick])

    //timed display changes that end with determining the winner
    useEffect(() => {
        if (display===3){
            determineWinner();
        }
        if(display<3){
            setTimeout(() => {setDisplay(display+1);},waitTime);
        }
    }, [display])

    return (
        <div className = "Results">
            <div className = "User-Pick">
                <div className = "Pick-Header">{userPickText}</div> 
                <div id = "userpick" className = "Pick-Display">
                    {(result==="Win")?<div className ="Winner-Circle"></div> :""}
                    <PickIcon pick = {userPick}/>
                </div>
            </div>

            {(display===3)?
                <EndResults result = {result} reset = {reset}/>
            : ""}

            <div className = "House-Pick">
                <div className = "Pick-Header">{cpuPickText}</div> 
                <div id = "cpupick" className = "Pick-Display">
                    {(result==="Loss")?<div className ="Winner-Circle"></div> :""}
                    <PickIcon pick = {(display>=2)? cpuPick: noPick}/>
                </div>
            </div>  
        </div>
    )
}

export default Results