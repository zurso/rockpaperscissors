
import {Winstreak} from "../models"
import "../stats.css";

type Props = {
    topstreak: Winstreak
}

const TopStreak = ({topstreak}: Props) => {
    //const [topstreak, setTopstreak] = useState(null as unknown as Winstreak);

    return (
        <div className = "WinStreakBlock">
                <div className = "StatsLabel" style ={{width: "180px"}}>LONGEST WIN STREAK</div>
                <div className = "StatsNumber">{topstreak?.streak}</div>
        </div>
    )
}

export default TopStreak