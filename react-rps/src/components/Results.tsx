import { useEffect, useState } from "react";
import {Pick} from "../models"
import "../game.css";
import "../results.css";
import PickIcon from '../components/PickIcon';
import EndResults from '../components/EndResults';

type Props = {
    state: boolean
    pick: Pick
    reset: () => void   
    updateScore: (point: number) => void 
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
                <div className = "Pick-Display">
                    <PickIcon pick = {userPick}/>
                </div>
            </div>

            {showEndResults?
                <EndResults result = {result} reset = {reset}/>
            : ""}

            <div className = "House-Pick">
                <div className = "Pick-Header">THE HOUSE PICKED</div> 
                <div className = "Pick-Display">
                    <PickIcon pick = {showCpuPick? cpuPick: noPick}/>
                </div>
            </div>  
        </div>
    )
}

export default Results