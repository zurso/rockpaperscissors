
import triangle from '../assets/images/bg-triangle.svg';
import "../game.css";
import {Pick} from "../models";
import PickIcon from '../components/PickIcon';
import React from 'react';

type Props = {
   passUserPick: (pick: Pick) => void    
}

const Game = ({passUserPick}: Props) => {

    const rock: Pick = {name: "rock"};
    const paper: Pick = {name: "paper"};
    const scissors: Pick = {name: "scissors"};

    const shoot = (e: React.MouseEvent<HTMLElement>) => {
        let pick: Pick = {name: (e.currentTarget as HTMLInputElement).getAttribute("data-value")!};
        passUserPick(pick);
      }
    
    return (
        <div className = "Game">
            
            <div className = "Top-Left-Triangle">
                <div className = "Play-Button" data-value={paper.name} onClick={(e: React.MouseEvent<HTMLElement>) => shoot(e)}>
                    <PickIcon pick = {paper} />
                </div>
            </div>
            <div className = "Top-Right-Triangle">
                <div className = "Play-Button" data-value={scissors.name} onClick={(e: React.MouseEvent<HTMLElement>) => shoot(e)}>
                    <PickIcon pick = {scissors} />
                </div>
            </div>
            <img className = "Triangle" src={triangle} alt="triangle"/>
            <div className = "Bottom-Triangle">
                <div className = "Play-Button" data-value={rock.name} onClick={(e: React.MouseEvent<HTMLElement>) => shoot(e)}>
                    <PickIcon pick = {rock} />
                </div>
            </div>
        </div>
    )
}

export default Game