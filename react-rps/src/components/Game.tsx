
import triangle from "../assets/images/bg-triangle.svg";
import "../styles/game.css";
import {Pick} from "../models";
import PickIcon from "../components/PickIcon";
import React from "react";

type Props = {
   passUserPick: (pick: Pick) => void
   picks: Pick[]  
}

//component where user plays the game, chooses rock/paper/scissors

const Game = ({passUserPick, picks}: Props) => {

    //gets user's pick when choice is clicked
    const shoot = (e: React.MouseEvent<HTMLElement>) => {
        let name: string = (e.currentTarget as HTMLInputElement).getAttribute("data-value")!;
        picks.forEach((p: Pick) => {
            if(p.name===name){
                passUserPick(p);
            }
        });
      }
    
    //Improvement for future (mentioned in Spring domain): have order for picks so they can be sorted and displayed dynamically
    return (
        <div className = "Game">
            <div className = "Top-Left-Triangle">
                <div className = "Play-Button" data-value={picks[1].name} onClick={(e: React.MouseEvent<HTMLElement>) => shoot(e)}>
                    <PickIcon pick = {picks[1]} />
                </div>
            </div>
            <div className = "Top-Right-Triangle">
                <div className = "Play-Button" data-value={picks[2].name} onClick={(e: React.MouseEvent<HTMLElement>) => shoot(e)}>
                    <PickIcon pick = {picks[2]} />
                </div>
            </div>
            <img className = "Triangle" src={triangle} alt="triangle"/>
            <div className = "Bottom-Triangle">
                <div className = "Play-Button" data-value={picks[0].name} onClick={(e: React.MouseEvent<HTMLElement>) => shoot(e)}>
                    <PickIcon pick = {picks[0]} />
                </div>
            </div>
        </div>
    )
}

export default Game