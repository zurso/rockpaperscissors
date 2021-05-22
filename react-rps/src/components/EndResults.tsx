
import "../styles/results.css";

type Props = {
    result: String
    reset: () => void
 }

//Component for holding final results (Win/Loss/Tie) and Play Again Button

const EndResults = ({result, reset}: Props) => {

    const winText: string = "YOU WIN";
    const lossText: string = "YOU LOSE";
    const tieText: string = "TIE";
    const playAgainText: string = "PLAY AGAIN";

    switch(result){
        case "Win":
            return (
                <div className = "Play-Again">
                    <div className = "Winner-Header">{winText}</div>
                    <button className= {["Play-Again-Button", "Win-Tie-Text"].join(" ")} onClick={() => reset()}>{playAgainText}</button>
                </div>
            );
        case "Loss":
            return (
                <div className = "Play-Again">
                    <div className = "Winner-Header">{lossText}</div>
                    <button className= {["Play-Again-Button", "Lose-Text"].join(" ")} onClick={() => reset()}>{playAgainText}</button>
                </div>
            );
        case "Tie":
            return (
                <div className = "Play-Again">
                    <div className = "Winner-Header">{tieText}</div>
                    <button className= {["Play-Again-Button", "Win-Tie-Text"].join(" ")} onClick={() => reset()}>{playAgainText}</button>
                </div>
            );
        default: return (<div></div>);
    }
}
        
export default EndResults