import React from "react";
import AcademicCalendarPdf from "../assets/Academic Calender 2020-21.pdf";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SidebarLink from "../components/SidebarLink";
import TitleBar from "../components/TitleBar";
import './css/Syllabus.css';

const AcademicCalendar = () => {
  return (
    <div className="syllabus-container">
      <Navbar />
      <TitleBar text="Syllabus" />

      <div className="syllabus-area-container">
        <div className="sidebar">
          <Sidebar>
            <SidebarLink />
            <SidebarLink />
            <SidebarLink />
            <SidebarLink />
            <SidebarLink />
            <SidebarLink />
          </Sidebar>
        </div>
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
      </div>
    </div>
  );
};

export default AcademicCalendar;
