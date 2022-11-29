import { Link } from "react-router-dom";
import "../styles/nav.css"


export default function Nav() {
    return (
        <nav className="kasa-nav">
            <ul className="kasa-nav-list">
                <li>
                    <Link to={`home`} className="kasa-nav-button">Accueil</Link>
                </li>
                <li>
                    <Link to={`about`} className="kasa-nav-button">A propos</Link>    
                </li>
            </ul>
        </nav>)
}