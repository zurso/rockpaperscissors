
import {Pick} from "../models"
import rockImg from '../assets/images/icon-rock.svg';
import paperImg from '../assets/images/icon-paper.svg';
import scissorsImg from '../assets/images/icon-scissors.svg';
import "../game.css";

type Props = {
    pick: Pick
 }

const PickIcon = ({pick}: Props) => {

    switch(pick.name){
        case "rock":
            return (
                <div className = {["Pick", "Rock"].join(" ")}>
                    <img src={rockImg} alt={pick.name}/>
                </div>
            );
        case "paper":
            return (
                <div className = {["Pick", "Paper"].join(" ")}>
                    <img src={paperImg} alt={pick.name}/>
                </div>
            );
        case "scissors":
            return (
                <div className = {["Pick", "Scissors"].join(" ")}>
                    <img src={scissorsImg} alt={pick.name}/>
                </div>
            );
        default:
            return (<div></div>);
    }
    
}

export default PickIcon