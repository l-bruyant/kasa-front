import "../styles/home.css"
import CardsGrid from "../components/cardsgrid.jsx";
import Banner from "../components/banner";
import ScrollToTop from "../components/scrolltotop";

export default function Home() {
    return (
        <div className='main-wrapper'>
            <section className="homeWrapper">
                <ScrollToTop />
                <Banner src="https://images.unsplash.com/photo-1593201464350-96ec57065aa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" txt="Chez vous, partout et ailleurs"/>
                <CardsGrid />
            </section>
        </div>
    )
}