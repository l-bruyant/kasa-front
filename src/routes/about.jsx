import { FAQdata } from "../data/FAQdata.js"
import "../styles/about.css"
import Accordion from "../components/accordion.jsx"

export default function About() {
    return (
    <section className="FAQcontainer">
        <img src="https://images.unsplash.com/photo-1465311530779-5241f5a29892?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="bannerBackgroundAbout"/>
        <div className="topicsContainer">
            { FAQdata.map((topic) => 
                <Accordion title={topic.title} content={topic.content} key={topic.title} />
            ) }
        </div>
    </section>
    )
}