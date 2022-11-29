import React from 'react'
import Footer from '../components/Footer';
import LinkBar from '../components/LinkBar';
import Navbar from '../components/Navbar';
import TitleBar from '../components/TitleBar';
import SIFPDF from '../assets/Final SIF Report.pdf';

const SIF = () => {
    return (
        <div>
            <Navbar />
            <TitleBar text="Affiliating University" />
            <LinkBar />

            <div className="main-area">
                <h1>SIF Report</h1>
                <object
                    className="staff-pdfFile"
                    data={SIFPDF}
                    type="application/pdf"
                    width="75%"
                    height="800px"
                ></object>


            </div>
            <div>

                <Footer />
            </div>
        </div>
    )
}

export default SIF;