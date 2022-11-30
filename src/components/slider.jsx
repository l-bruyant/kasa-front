import "../styles/slider.css"
import rightArrow from "../assets/right-arrow.svg"
import leftArrow from "../assets/left-arrow.svg"
import {useState} from 'react'



export default function Slider(props) {
    const images = props.place.pictures
    const length = images.length
    const [current, setCurrent] = useState(0)

    if(!Array.isArray(images) || images.length <= 0) {
        return null
    }

    // looping 
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    // -- 

    return (
            <div className="slider">

                <img src={leftArrow} alt="" className="leftArrow" onClick={prevSlide}/>
                <img src={rightArrow} alt="" className="rightArrow" onClick={nextSlide}/>

                {images.map((slide, index) => 
                    <div className={index === current ? 'slide active' : 'slide' } key={index}>
                        {index === current && (<img src={slide} alt="" className="sliderImage"/>)}
                    </div>
                )}

                <div className='sliderIndex'>{current + 1} / {length}</div>

            </div>
        )
}
