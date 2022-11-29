import React, { useState } from 'react'
import Footer from '../components/Footer';
import LinkBar from '../components/LinkBar';
import Navbar from '../components/Navbar';
import TitleBar from '../components/TitleBar';
import Results from "../assets/D Pharm result.pdf";




const Examination = () => {




    return (
        <div>
            <Navbar />
            <TitleBar text="Examination" />
            <LinkBar />


            <div className="faculty-area-container">
                <div className="main-area">

                    <h2>Results for D.Pharm</h2>
                    <object className="pdfFile" data={Results} type="application/pdf" width="100%" height="800px">
                    </object>

                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Examination;
