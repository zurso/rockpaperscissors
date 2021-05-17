import logo from '../assets/images/logo.svg';
import TopStreak from './TopStreak'
import Score from './Score'

type Props = {
    score: number
 }

const Header = ({score}: Props) => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <TopStreak/>
            <Score updatedScore = {score}/>
        </div>
    )
}

export default Header