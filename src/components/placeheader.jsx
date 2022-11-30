import "../styles/placeheader.css"
import PlaceTitle from "./placetitle"
import PlaceTags from "./placetags"
import PlaceOwner from "./placeowner"
import PlaceRating from "./placerating"



export default function PlaceHeader(props) {
    return (
        <section className="placeHeader">
            <div className="titleAndTags">
                <PlaceTitle place={props.place}/>
                <PlaceTags place={props.place}/>
            </div>
            <div className="ownerAndRating">
                <PlaceOwner place={props.place}/>
                <PlaceRating place={props.place}/>
            </div>
        </section>
        )
}