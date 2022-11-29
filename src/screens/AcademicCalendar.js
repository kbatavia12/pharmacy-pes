import React from "react";
// import AcademicCalendarOnePdf from "../assets/Academic calendar I D. Pharm. 2021-22.pdf";
import AcademicCalendarDpharm from "../assets/Academic calender D. Pharm..jpg";
// import AcademicCalendarTwoPdf from "../assets/Academic calendar II D. Pharm. 2021-22.pdf";
import AcademicCalendarBPdf from "../assets/Academic calender B. Pharm.pdf";
import Footer from "../components/Footer";
import LinkBar from "../components/LinkBar";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import './css/Syllabus.css';

const AcademicCalendar = () => {
  return (
    <div className="syllabus-container">
      <Navbar />
      <TitleBar text="Academic Calendar" />
      <LinkBar/>

      <div className="syllabus-area-container">
        
        <div className="main-area">
          <h2>Academic Calendar for D.Pharm</h2>
          <img
            src = {AcademicCalendarDpharm}

          />
          <h2>Academic Calendar for B.Pharm</h2>
          <object
            className="pdfFile"
            data={AcademicCalendarBPdf}
            type="application/pdf"
            width="110%"
            height="800px"
          ></object>
          <a download className="pdfLink" href={AcademicCalendarBPdf}>
            Download Academic Calendar for D.Pharm
          </a>
        </div>
      </div>
      <div>
        
        <Footer/>
      </div>
    </div>
  );
};

export default AcademicCalendar;
