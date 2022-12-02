import { useParams } from 'react-router-dom'
import PlaceHeader from '../components/placeheader'
import PlaceDetails from '../components/placedetails'
import Slider from '../components/slider'
import "../styles/place.css"
import ScrollToTop from "../components/scrolltotop";
import ErrorPage from './error-page'
import { mockPlacesData } from '../data/data'



export default function Place() {

    const params = useParams()

    const currentPlace = mockPlacesData.find(function (placeParam) {
        return placeParam.id === params.placeId
    })


    if(currentPlace == null) {
        return <ErrorPage />
    }

    const place = currentPlace

    return (
        <div className="main-wrapper">
            <section className="placeWrapper">
                <ScrollToTop />
                <Slider place={place} />
                <PlaceHeader place={place} /> 
                <PlaceDetails place={place} /> 
            </section>
        </div>
    )
}

