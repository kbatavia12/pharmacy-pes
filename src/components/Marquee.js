import React from "react";
import './css/Marquee.css';

const Marquee = () => {
  return (
    <div>
      <marquee className="marquee" bgcolor="#00008b">
        <p>
          Phone Number: (0253) 2514432 | Admissions Open D.Pharm/ B.Pharm 2021-22
        </p>
      </marquee>
    </div>
  );
};

export default Marquee;
