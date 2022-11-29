import "../styles/cardsgrid.css"
import HomeCard from "./homecard.jsx"
import { mockPlacesData } from "../data/data.js"

export default function CardsGrid() {
    return (
    <div className="cardsGrid">
        { mockPlacesData.map((place) => (
                <HomeCard 
                    place={place}
                    key={place.id}
                />
            )
        )}
    </div>
    )
}