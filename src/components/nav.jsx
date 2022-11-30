import { NavLink } from "react-router-dom";
import "../styles/nav.css"


export default function Nav() {

    return (
        <nav className="kasa-nav">
            <ul className="kasa-nav-list">
                <li>
                    <NavLink to={`home`} className={({isActive}) => {
                        return (isActive ? 'active' : '')
                    }}>Accueil</NavLink>
                </li>
                <li>
                    <NavLink to={`about`} className={({isActive}) => {
                        return (isActive ? 'active' : '')
                    }}>A propos</NavLink>    
                </li>
            </ul>
        </nav>)
}