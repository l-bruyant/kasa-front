import "../styles/home.css"
import CardsGrid from "../components/cardsgrid.jsx";
import ScrollToTop from "../components/scrolltotop";

export default function Home() {
    return (
        <section className="homeWrapper">
            <ScrollToTop />
            <div className="homeBanner">
                <img src="https://images.unsplash.com/photo-1593201464350-96ec57065aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" className="bannerBackground"/>
                <div className="bannerText">Chez vous, partout et ailleurs</div>
            </div>
            <CardsGrid />
        </section>
    )
}