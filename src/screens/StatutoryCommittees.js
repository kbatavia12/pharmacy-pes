import React from "react";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import CommitteesI from '../assets/List of Committee  26.11.2022.pdf';


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
                <h1>Statutory Committees</h1>
                <object
                    className="staff-pdfFile"
                    data={CommitteesI}
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
