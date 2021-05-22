
import {Winstreak} from "../models"
import "../styles/stats.css";

type Props = {
    topstreak: Winstreak
}

//Component for displaying the longest win streak ever attained by anyone

const TopStreak = ({topstreak}: Props) => {

    const streakText: string = "LONGEST WIN STREAK";

    return (
        <div className = "Winstreak-Block">
                <div className = {["Stats-Label", "Winstreak-Label"].join(" ")}>{streakText}</div>
                <div className = "Stats-Number">{topstreak?.streak}</div>
        </div>
    )
}

export default TopStreak