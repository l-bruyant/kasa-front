import "../styles/banner.css"

export default function Banner(props) {
    return (
        <div className="banner">
            <img src={props.src} alt="" className="bannerBackground"/>
            <div className="bannerText">{props.txt}</div>
        </div>
    )
}