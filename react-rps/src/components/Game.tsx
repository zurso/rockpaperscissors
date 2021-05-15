import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';

const Game = () => {
    const shoot = (e: React.MouseEvent<HTMLElement>) => {
        //console.log((e.target as any).value);
        console.log((e.currentTarget as HTMLInputElement).value);
    }

    return (
        <div>
            <button value="rock" onClick={(e: React.MouseEvent<HTMLElement>) => shoot(e)}><img src={rock} alt="rock"/></button>
            <button value="paper" onClick={(e: React.MouseEvent<HTMLElement>) => shoot(e)}><img src={paper} alt="paper"/></button>
            <button value="scissors" onClick={(e: React.MouseEvent<HTMLElement>) => shoot(e)}><img src={scissors} alt="scissors"/></button>
        </div>
    )
}

export default Game