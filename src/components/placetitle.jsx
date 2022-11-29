import "../styles/placetitle.css"


export default function PlaceTitle(props) {
    return (
        <div className="placeTitle">
            <h1>{props.place.title}</h1>
            <div>{props.place.location}</div>
        </div>
        )
}