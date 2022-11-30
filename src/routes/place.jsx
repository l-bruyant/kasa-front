import { useLocation } from 'react-router-dom'
import PlaceHeader from '../components/placeheader'
import PlaceDetails from '../components/placedetails'
import Slider from '../components/slider'
import "../styles/place.css"
import ScrollToTop from "../components/scrolltotop";

export default function Place() {
    const location = useLocation()
    const { place } = location.state
    return (
        <section className="placeWrapper">
            <ScrollToTop />
            <Slider place={place} />
            <PlaceHeader place={place} /> 
            <PlaceDetails place={place} /> 
        </section>
    )
}

