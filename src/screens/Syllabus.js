import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import "./css/Syllabus.css";
import syllabusOld from "../assets/DPharm_Old.pdf";
import syllabusNew from "../assets/DPharm_New.pdf";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";
import LinkBar from "../components/LinkBar";


const Syllabus = () => {

  const [numPages, setNumPages] = useState(null);
  const [file, setFile] = useState(syllabusNew);

  return (
    <div className="syllabus-container" >
      <Navbar />
      <TitleBar text="Syllabus" />
      <LinkBar />

      <div className="syllabus-area-container">

        <div className="main-area">
          <h2>Syllabus for D.Pharm</h2>
          <div style = {{display: 'flex', width: '90vw', justifyContent: 'space-between'}} >

          <object style = {{marginRight: '5%'}} className="pdfFile" data={syllabusOld} type="application/pdf" width="50%" height="800px">
          </object>
          <object className="pdfFile" data={syllabusNew} type="application/pdf" width="50%" height="800px">
          </object>

          </div>
          <a download className="pdfLink" href={syllabusNew} >Download portion for D.Pharm</a>
        </div>
        <div className="main-area" >
          
        </div>
      </div>
      <div>
        <Marquee />
        <Footer />
      </div>
    </div>
  );
};

export default Syllabus;
