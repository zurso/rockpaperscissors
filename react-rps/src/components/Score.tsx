import { useEffect, useState } from "react";
import "../stats.css";

type Props = {
    updatedScore: number
 }

const Score = ({updatedScore}: Props) => {
    const [score, setScore] = useState(0 as number);

    useEffect(() => {
        setScore(updatedScore);
    }, [updatedScore])

    return (
        <div className = "ScoreBlock">
                <div className = "StatsLabel">SCORE</div>
                <div className = "StatsNumber">{score}</div>
        </div>
    )
}

export default Score