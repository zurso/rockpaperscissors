import { useEffect, useState } from "react";
import {Pick} from "../models"
import "../game.css";

type Props = {
    state: boolean
    pick: string
    reset: () => void   
    updateScore: (point: number) => void 
}

const Results = ({pick, state, reset, updateScore}: Props) => {
    const [cpuPick, setCpuPick] = useState(null as unknown as Pick);
    const [userPick, setUserPick] = useState(null as unknown as string);
    const [result, setResult] = useState(null as unknown as string);
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

    useEffect(() => {
        if(state){
            playGame();
        }
    }, [state])

    useEffect(() => {
        if(cpuPick!=null){
            console.log("Computer pick: "+cpuPick.name);
            if(cpuPick.name===userPick){
                setResult("Tie");
                updateScore(0);
            }
            else if((userPick==="rock"&&cpuPick.name==="scissors")||(userPick==="paper"&&cpuPick.name==="rock")||(userPick==="scissors"&&cpuPick.name==="paper")){
                setResult("Win");
                updateScore(1);
            }
            else{
                setResult("Loss");
                updateScore(-1);
            }
        }
    }, [cpuPick])

    return (
        <div>
            You picked: {userPick}
            Computer picked: {cpuPick?.name}
            Result: {result}
            <button className= "Play-Again-Button" onClick={() => reset()}>PLAY AGAIN</button>
        </div>
    )
}

export default Results