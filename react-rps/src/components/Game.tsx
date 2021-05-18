import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';
import "../game.css";

type Props = {
   onShoot: (e: React.MouseEvent<HTMLElement>) => void    
}

const Game = ({onShoot}: Props) => {
    
    return (
        <div>
            <button className = "Play-Button" value="rock" onClick={(e: React.MouseEvent<HTMLElement>) => onShoot(e)}><img src={rock} alt="rock"/></button>
            <button className = "Play-Button" value="paper" onClick={(e: React.MouseEvent<HTMLElement>) => onShoot(e)}><img src={paper} alt="paper"/></button>
            <button className = "Play-Button" value="scissors" onClick={(e: React.MouseEvent<HTMLElement>) => onShoot(e)}><img src={scissors} alt="scissors"/></button>
        </div>
    )
}

export default Game