import "../styles/accordion.css"
import { useState } from "react"
import arrowUp from "../assets/arrow-up.svg"


export default function Accordion(props) {

    const [open, setOpen] = useState(false);

    return (
        <div className="accordion">
            <div className="accordionTitle" onClick={() => {setOpen(!open)}}>
                {props.title}
                <img src={arrowUp} alt='' className={open? 'down' : 'up'} />
            </div>
            <div className={`accordionContent ${open? 'show' : 'hide'}`}>{props.content}</div>
        </div>
        )
}