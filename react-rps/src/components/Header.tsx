import logo from '../assets/images/logo.svg';
import TopStreak from './TopStreak'
import Score from './Score'

const Header = () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <TopStreak/>
            <Score/>
        </div>
    )
}

export default Header