import React from "react";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import AdmittedStudentsPdf from "../assets/List of admitted students 2021-22.pdf";
// import AddmittedStudentsPdf from '../assets/'
import LinkBar from "../components/LinkBar";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import AdmittedSem1 from '../assets/F. Y. B. Pharm. SEM I student list.pdf';

const AdmittedStudents = () => {
    return (
        <div>
            <Navbar />
            <TitleBar text="Admitted Students" />
            <LinkBar />

            <div className="main-area">
                <h1>List of Admitted Students</h1>
                <object
                    className="staff-pdfFile"
                    data={AdmittedStudentsPdf}
                    type="application/pdf"
                    width="75%"
                    height="800px"
                >
                </object>
                
                <h1>Admitted Students FY B.Pharm</h1>
                <object
                    className="staff-pdfFile"
                    data={AdmittedSem1}
                    type="application/pdf"
                    width="75%"
                    height="800px"
                >
                </object>

            </div>
            <div>
                
                <Footer />
            </div>
        </div>
    );
};

export default AdmittedStudents;
