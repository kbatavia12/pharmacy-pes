import React from "react";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";

import LinkBar from "../components/LinkBar";
import DTEB from '../assets/DTE approval B Pharm.pdf';
import FRApic from '../assets/FRA_pic.jpg'


const FRA = () => {
    return (
        <div>
            <Navbar />
            {/* <div className="main-area"> */}
                <h1>FRA</h1>
                <img src={FRApic} alt=""
                    width={"50%"} 
                    height= {"400px"}
                />

            {/* </div> */}
        </div>
    );
};

export default FRA;
