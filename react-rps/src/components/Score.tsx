import { useEffect, useState } from "react";

type Props = {
    updatedScore: number
 }

const Score = ({updatedScore}: Props) => {
    const [score, setScore] = useState(0 as number);

    useEffect(() => {
        setScore(updatedScore);
    }, [updatedScore])

    return (
        <div>
            {score}
        </div>
    )
}

export default Score