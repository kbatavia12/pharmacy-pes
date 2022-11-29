import React from "react";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import BoardDPharm from "../assets/Affiliating Board D. Pharm..docx.pdf";
import UniBPharm from "../assets/Affiliating University B. Pharm..docx.pdf";
import LinkBar from "../components/LinkBar";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";

const AffiliatingUniversity = () => {
    return (
        <div>
            <Navbar />
            <TitleBar text="Affiliating University" />
            <LinkBar />

            <div className="main-area">

                <h1>Affiliating Board D.Pharm</h1>
                <object
                    className="staff-pdfFile"
                    data={BoardDPharm}
                    type="application/pdf"
                    width="75%"
                    height="800px"
                ></object>
                
                <h1>Affiliating University B.Pharm</h1>
                <object
                    className="staff-pdfF
                    
                    ile"
                    data={UniBPharm}
                    type="application/pdf"
                    width="75%"
                    height="800px"
                ></object>

            </div>
            <div>
                
                <Footer />
            </div>
        </div>
    );
};

export default AffiliatingUniversity;
