import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import './Slider.css';

const Slider = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    console.log(current)

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="slider-container">
            <div className="slider-header">
                <h1>What clients love about working with us</h1>
            </div>
            <section className="slider">
                <BsArrowLeft className="left-arrow" onClick={prevSlide} />
                {SliderData.map((slide, index) => {
                    return (
                        <div
                            className={index === current ? 'slide active' : 'slide'} key={index}
                        >
                            {index === current && (
                                <div className="slider-data">
                                    <h3>{slide.header}</h3>
                                    <p>{slide.content}</p>
                                </div>
                            )} 
                        </div>
                    );
                })}
                <BsArrowRight className="right-arrow" onClick={nextSlide} />
            </section>
        </div>
        
    )
}

export default Slider;