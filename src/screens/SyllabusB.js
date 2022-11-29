import React from 'react'
import SyllabusBPharm from "../assets/Syllabus_B_Pharm.pdf";
import Footer from '../components/Footer';
import LinkBar from '../components/LinkBar';
import Marquee from '../components/Marquee';
import Navbar from '../components/Navbar';
import TitleBar from '../components/TitleBar';
import "./css/Syllabus.css";

const SyllabusB = () => {
    return (
        <div className="syllabus-container" >
            <Navbar />
            <TitleBar text="Syllabus" />
            <LinkBar />

            <div className="syllabus-area-container"  style = {{display: 'flex', justifyContent: "center"}}>

                <div className="main-area">
                    <h2>Syllabus for B.Pharm</h2>
                    <object className="pdfFile" data={SyllabusBPharm} type="application/pdf" width="100%" height="800px">
                    </object>
                    <a download className="pdfLink" href={SyllabusBPharm} >Download portion for B.Pharm</a>
                </div>
                <div className="main-area" >

                </div>
            </div>
            <div>
                
                <Footer />
            </div>
        </div>
    )
}

export default SyllabusB;
