
import "../styles/stats.css";

type Props = {
    score: number
 }

 //Component for displaying the user's current score

const Score = ({score}: Props) => {

    const scoreText: string = "SCORE";

    return (
        <div className = "Score-Block">
                <div className = "Stats-Label">{scoreText}</div>
                <div className = "Stats-Number">{score}</div>
        </div>
    )
}

export default Score