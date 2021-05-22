import logo from "../assets/images/logo.svg";
import TopStreak from "./TopStreak"
import Score from "./Score"
import { Winstreak } from "../models";
import "../styles/header.css";

type Props = {
    score: number
    topstreak: Winstreak
 }

 //Header component displays app icon, top streak, and user's score

const Header = ({score, topstreak}: Props) => {
    return (
        <div className = "Header">
            <img src={logo} className="App-logo" alt="logo" />
            <TopStreak topstreak = {topstreak}/>
            <Score score = {score}/>
        </div>
    )
}

export default Header