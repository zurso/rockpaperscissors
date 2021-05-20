
import "../results.css";

type Props = {
    result: String
    reset: () => void
 }

const EndResults = ({result, reset}: Props) => {

    switch(result){
        case "Win":
            return (
                <div className = "Play-Again">
                    <div className = "Winner-Header">YOU WIN</div>
                    <button className= {["Play-Again-Button", "Win-Tie-Text"].join(" ")} onClick={() => reset()}>PLAY AGAIN</button>
                </div>
            );
        case "Loss":
            return (
                <div className = "Play-Again">
                    <div className = "Winner-Header">YOU LOSE</div>
                    <button className= {["Play-Again-Button", "Lose-Text"].join(" ")} onClick={() => reset()}>PLAY AGAIN</button>
                </div>
            );
        case "Tie":
            return (
                <div className = "Play-Again">
                    <div className = "Winner-Header">TIE</div>
                    <button className= {["Play-Again-Button", "Win-Tie-Text"].join(" ")} onClick={() => reset()}>PLAY AGAIN</button>
                </div>
            );
        default: return (<div></div>);
    }
}
        
export default EndResults