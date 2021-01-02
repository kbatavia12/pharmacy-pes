import React, { useState } from "react";
import landingData from "../assets/data";
import './css/Slide.css';


const Slide = ({activeIndex}) => {
  const [data, setData] = useState(landingData);

  return (
    <div>
      {data.map((item, index) => (
        <div className={index === activeIndex ? "active" : "slide"}>
          <img src={item.image}></img>
        </div>
      ))}
    </div>
  );
};

export default Slide;
