import rules from "../assets/images/image-rules.svg";
import "../rules.css";

type Props = {
    popup: boolean
    setRulesPopup: (popup: boolean) => void
 }

const Rules = ({popup, setRulesPopup}: Props) => {
    return (popup) ? (
        <div className = "Rules">
            <div className = "Rules-Popup">
                <header className = "Rules-Header">RULES</header>
                <button className="Close-Button" onClick = {() => setRulesPopup(false)}>X</button>
                <img className = "Rules-Image" src = {rules} alt = "rules" />            
            </div>
        </div>
    ) : <div></div>
}

export default Rules