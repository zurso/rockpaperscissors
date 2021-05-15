import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';

const Game = () => {
    const shoot = (e) => {
        console.log(e.currentTarget.value);
    }

    return (
        <div>
            <button value="rock" onClick={(e) => shoot(e)}><img src={rock} alt="rock"/></button>
            <button value="paper" onClick={(e) => shoot(e)}><img src={paper} alt="paper"/></button>
            <button value="scissors" onClick={(e) => shoot(e)}><img src={scissors} alt="scissors"/></button>
        </div>
    )
}

export default Game