import "../styles/accordion.css"


export default function Accordion(props) {
    return (
        <div className="accordion">
            <div className="accordionTitle">{props.title}</div>
            <div className="accordionContent">{props.content}</div>
        </div>
        )
}