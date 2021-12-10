import React, { useState } from "react";
import { images } from "../assets/data";
import "./css/Slide.css";

const Slide = ({ activeIndex }) => {
    const [data, setData] = useState(images);

    return (
        <div>
            {data.map((item, index) => (
                <div className={index === activeIndex ? "active" : "slide"}>
                    <img style = {{height: "80vh"}} src={item.image}></img>
                </div>
            ))}
        </div>
    );
};

export default Slide;
