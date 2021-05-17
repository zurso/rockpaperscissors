
import {Winstreak} from "../models"

type Props = {
    topstreak: Winstreak
}

const TopStreak = ({topstreak}: Props) => {
    //const [topstreak, setTopstreak] = useState(null as unknown as Winstreak);

    return (
        <div>
            {topstreak?.streak}
        </div>
    )
}

export default TopStreak