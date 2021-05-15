import { useEffect, useState } from "react"
import {Winstreak} from "../models"

const TopStreak = () => {
    const [topstreak, setTopstreak] = useState(null as unknown as Winstreak);

    useEffect(() => {

        if(!topstreak){
            fetch('http://localhost:8080/topWinstreak').then((response) => 
            response.json()).then(data => {
                setTopstreak(data);
            });
            }
        });
    return (
        <div>
     {/*       {topstreak ? topstreak!.map((wstreak: Winstreak) => {
                return <>
                    {wstreak.streak}
                    </>
            }) : ''}
            */}
            {topstreak?.streak}
        </div>
    )
}

export default TopStreak