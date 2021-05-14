import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';

const Game = () => {
    const shoot = (e) => {
        console.log(e.target.value); //not working
    }

    return (
        <div>
            <button value="rock"><img src={rock} className="button" alt="rock"  onClick={e => shoot(e, "value")}/></button>
            <button value="paper"><img src={paper} className="button" alt="paper" onClick={e => shoot(e, "value")}/></button>
            <button value="scissors"><img src={scissors} className="button" alt="scissors" onClick={e => shoot(e, "value")}/></button>
        </div>
    )
}

export default Game