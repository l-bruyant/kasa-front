import "../styles/placedetails.css"
import Accordion from "./accordion"

export default function PlaceDetails(props) {

    const equipments = props.place.equipments
    const equipmentsList = equipments.map((equipment) =>
        <div key={equipment}>{equipment}</div>
    )

    return (
        <section className="placeDetailsContainer">
            <div className="placeDetailsDescription">
                <Accordion title="Description" content={props.place.description}/>
            </div>
            <div className="placeDetailsEquipments">
                <Accordion title="Equipements" content={equipmentsList}/>
            </div>
        </section>
        )
}