import React from "react";
import AcademicCalendarPdf from "../assets/Academic Calender 2020-21.pdf";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import './css/Syllabus.css';

const AcademicCalendar = () => {
  return (
    <div className="syllabus-container">
      <Navbar />
      <TitleBar text="Academic Calendar" />

      <div className="syllabus-area-container">
        
        <div className="main-area">
          <h2>Academic Calendar for D.Pharm</h2>
          <object
            className="pdfFile"
            data={AcademicCalendarPdf}
            type="application/pdf"
            width="110%"
            height="800px"
          ></object>
          <a download className="pdfLink" href={AcademicCalendarPdf}>
            Download Academic Calendar for D.Pharm
          </a>
        </div>
      </div>
      <div>
        <Marquee />
        <Footer/>
      </div>
    </div>
  );
};

export default AcademicCalendar;
