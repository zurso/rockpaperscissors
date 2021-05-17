import { useEffect, useState } from "react";
import {Pick} from "../models"

type Props = {
    state: Boolean
    pick: String
    reset: () => void    
}

const Results = ({pick, state, reset}: Props) => {
    const [cpuPick, setCpuPick] = useState(null as unknown as Pick);
    const [userPick, setUserPick] = useState(null as unknown as String);
    const [result, setResult] = useState(null as unknown as String);
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
            if(cpuPick.name===userPick){
                setResult("Tie");
            }
            else if((userPick==="rock"&&cpuPick.name==="scissors")||(userPick==="paper"&&cpuPick.name==="rock")||(userPick==="scissors"&&cpuPick.name==="paper")){
                setResult("Win");
            }
            else{
                setResult("Loss");
            }
        }
    }, [cpuPick])

    return (
        <div>
            You picked: {userPick}
            Computer picked: {cpuPick?.name}
            Result: {result}
            <button onClick={() => reset()}>Reset Game</button>
        </div>
    )
}

export default Results