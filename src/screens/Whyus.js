import React from "react";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import "./css/Whyus.css";

const Whyus = () => {
  return (
    <div className="whyus">
      <Navbar />
      <TitleBar text="Why PESIOP?" />
      <div className="whyus-area-container">
        <div className="main-area">
          <h1>Why us</h1>
          <ul>
            <li>Established in the Academic Year 2020-21</li>
            <li>Courses: D. Pharmacy (DIP).</li>
            <li>Faculty: M.Pharm. : 05 .</li>
            <li>
              Faculty members have attended various National and International
              Conferences& presented research papers.
            </li>
            <li>
              Publications: More than 10 Research Papers in Reputed National and
              International Journals.
            </li>
            <li>
              Soft Skill programme for students to improve communication skills
              with level Seminars & Guest lectures.
            </li>
            <li>
              Computer Labs with 15 systems, with wi-fi& high speed internet
              facility and requisite application & system software.
            </li>
            <li>Seminar Hall &Class room with LCD Projectors.</li>
            <li>Full Automation of Library &College office .</li>
            <li>100 % assistance for admission for further education.</li>
            <li>Centrally located </li>
            <li>Fees Scholarship to D. Pharmacy students</li>
            <li>
              Sports Activities, Industrial Visit, Hospital visit, Cultural
              Programme for students.
            </li>
            <li>
              Extension Activities like Blood Donation Camp, Eye Checkup Camp,
              Save Girl Child Rally, Helping hand to Adharashram .
            </li>
          </ul>
        </div>
      </div>
      <Marquee/>
      <Footer/>
    </div>
  );
};

export default Whyus;
