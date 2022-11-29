import "../styles/homecard.css"
import { Link } from "react-router-dom"

export default function HomeCard(props) {
    const placeTitle = props.place.title
    const placeCover = props.place.cover
    const placeId = props.place.id

    return (
        <div className="homeCard">
            <Link to={`/place-${placeId}`} state={{ place: props.place}} className="homeCardLink">
                <div className="homeCardOverlay"></div>       
                <img src={placeCover} alt="" className="homeCardBackground"/>
                <div className="homeCardTitle">{placeTitle}</div>
            </Link>
        </div>
        )
}
