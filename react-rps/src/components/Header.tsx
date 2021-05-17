import logo from '../assets/images/logo.svg';
import TopStreak from './TopStreak'
import Score from './Score'
import { Winstreak } from '../models';

type Props = {
    score: number
    topstreak: Winstreak
 }

const Header = ({score, topstreak}: Props) => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <TopStreak topstreak = {topstreak}/>
            <Score updatedScore = {score}/>
        </div>
    )
}

export default Header