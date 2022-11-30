import "../styles/placeowner.css"


export default function PlaceOwner(props) {
    return (
        <div className="placeOwner">
            <div className="placeOwnerName">{props.place.host.name}</div>
            <img className="placeOwnerPicture" src={props.place.host.picture} alt={props.place.host.name}/>
        </div>
        )
}