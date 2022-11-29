import "../styles/home.css"
import bannerPicture from "../assets/bannerpicture.svg"
import CardsGrid from "../components/cardsgrid.jsx";


export default function Home() {
    return (
        <section className="homeWrapper">
            <div className="homeBanner">
                <img src={bannerPicture} alt="" className="bannerBackground"/>
                <div className="bannerText">Chez vous, partout et ailleurs</div>
            </div>
            <CardsGrid />
        </section>
    )
}