import rules from "../assets/images/image-rules.svg";
import "../styles/rules.css";

type Props = {
    popup: boolean
    setRulesPopup: (popup: boolean) => void
 }

 //Component for Rules popup

const Rules = ({popup, setRulesPopup}: Props) => {

    const rulesText: string = "RULES";
    const closeText: string = "X";

    return (popup) ? (
        <div className = "Rules">
            <div className = "Rules-Popup">
                <header className = "Rules-Header">{rulesText}</header>
                <button className="Close-Button" onClick = {() => setRulesPopup(false)}>{closeText}</button>
                <img className = "Rules-Image" src = {rules} alt = "rules" />            
            </div>
        </div>
    ) : <div></div>
}

export default Rules