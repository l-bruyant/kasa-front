import "../styles/home.css"
import bannerPicture from "../assets/bannerpicture.svg"
import CardsGrid from "../components/cardsgrid.jsx";
import ScrollToTop from "../components/scrolltotop";

export default function Home() {
    return (
        <section className="homeWrapper">
            <ScrollToTop />
            <div className="homeBanner">
                <img src={bannerPicture} alt="" className="bannerBackground"/>
                <div className="bannerText">Chez vous, partout et ailleurs</div>
            </div>
            <CardsGrid />
        </section>
    )
}