import React from "react";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import StatutoryCommitteesPdf from "../assets/Statutory Committees.pdf";

import LinkBar from "../components/LinkBar";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";

const StatutoryCommittees = () => {
    return (
        <div>
            <Navbar />
            <TitleBar text="Statutory Committees" />
            <LinkBar />

            <div className="main-area">
                <object
                    className="staff-pdfFile"
                    data={StatutoryCommitteesPdf}
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

export default StatutoryCommittees;
