import { useLocation } from 'react-router-dom'
import PlaceHeader from '../components/placeheader'
import "../styles/place.css"

export default function Place() {
    const location = useLocation()
    const { place } = location.state
    return (
        <section className="placeWrapper">
            <div className="slider">
                <img src={place.pictures[0]} alt="" className="sliderPicture"/>
            </div>
            <PlaceHeader place={place} /> 
        </section>
    )
}

