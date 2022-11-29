import logoWhite from "../assets/kasa-logo-white.svg"
import "../styles/footer.css"


export default function Footer() {
    return (
    <div className="kasa-footer">
        <img src={ logoWhite } alt="logo kasa" className="kasa-logo-footer"/>
        <div className="kasa-footer-text">2020 Kasa. All rights reserved</div>
    </div>
    
    )
}