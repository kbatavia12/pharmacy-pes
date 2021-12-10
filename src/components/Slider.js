import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import { images } from "../assets/data";

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        let slideInterval = setInterval(() => {
            goToNext();
        }, 2000);

        return () => clearInterval(slideInterval);
    }, [activeIndex]);

    const goToNext = () => {
        let index = activeIndex;
        let length = images.length;
        if (index === length - 1) {
            index = 0;
        } else {
            index++;
        }
        setActiveIndex(index);
    };

    return (
        <div className="slider-container">
            <Slide activeIndex={activeIndex} />
        </div>
    );
};

export default Slider;
