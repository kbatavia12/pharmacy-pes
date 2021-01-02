import React from "react";
import './css/Marquee.css';

const Marquee = () => {
  return (
    <div>
      <marquee className="marquee" bgcolor="#00008b">
        <p>
          Phone Number: (0253) 2952295 | Admissions Open D.Pharm 2020-21
        </p>
      </marquee>
    </div>
  );
};

export default Marquee;
