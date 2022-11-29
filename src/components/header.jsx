import Nav from "./nav"
import "../styles/header.css"
import logoRed from "../assets/kasa-logo-red.svg"

export default function Header() {
    return (
        <div className="kasa-header-bar">
            <img src={logoRed} alt="logo kasa" className="logo-header"/>
            <Nav />
        </div>
        )
}