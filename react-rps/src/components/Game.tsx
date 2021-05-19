import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';
import triangle from '../assets/images/bg-triangle.svg';
import "../game.css";

type Props = {
   onShoot: (e: React.MouseEvent<HTMLElement>) => void    
}

const Game = ({onShoot}: Props) => {
    
    return (
        <div className = "Game">
            
            <div className = "Top-Left-Triangle">
                <button className = {["Play-Button", "Paper-Button"].join(" ")} value="paper" onClick={(e: React.MouseEvent<HTMLElement>) => onShoot(e)}><img src={paper} alt="paper"/></button>
            </div>
            <div className = "Top-Right-Triangle">
                <button className = {["Play-Button", "Scissors-Button"].join(" ")} value="scissors" onClick={(e: React.MouseEvent<HTMLElement>) => onShoot(e)}><img src={scissors} alt="scissors"/></button>
            </div>
            <img className = "Triangle" src={triangle} alt="triangle"/>
            <div className = "Bottom-Triangle">
                <button className = {["Play-Button", "Rock-Button"].join(" ")} value="rock" onClick={(e: React.MouseEvent<HTMLElement>) => onShoot(e)}><img src={rock} alt="rock"/></button>
            </div>
        </div>
    )
}

export default Game