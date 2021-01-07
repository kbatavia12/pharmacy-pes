import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import "./css/Syllabus.css";
import pdfFile from "../assets/syllabus.pdf";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import LinkBar from "../components/LinkBar";


const Syllabus = () => {
    
    const [numPages, setNumPages] = useState(null);
    const [file, setFile] = useState(pdfFile);
  
    return (
    <div className = "syllabus-container" >
      <Navbar />
      <TitleBar text="Syllabus" />
      <LinkBar/>

      <div className="syllabus-area-container">
        
        <div className="main-area">
            <h2>Syllabus for D.Pharm</h2>
            <object className = "pdfFile" data = {pdfFile} type = "application/pdf" width = "110%" height = "800px">
            </object>
            <a download className = "pdfLink" href = {pdfFile} >Download portion for D.Pharm</a>
        </div>
      </div>
        <div>
          <Marquee/>
          <Footer/>
        </div>
    </div>
  );
};

export default Syllabus;
