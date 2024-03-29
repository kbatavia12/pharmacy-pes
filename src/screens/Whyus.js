import React from "react";
import Footer from "../components/Footer";
import LinkBar from "../components/LinkBar";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import "./css/Whyus.css";

const Whyus = () => {
  return (
    <div className="whyus">
      <Navbar />
      <TitleBar text="Why PESIOP???
" />
      <LinkBar />

      <div className="whyus-area-container">
        <div className="main-area">
          <h1>Why PESIOP???
</h1>
          <ul>
            <li>Established in the Academic Year 2020-21</li>
            <li>Centrally located and thus easy access to transportation
            </li>
            <li>Programs offered: D. Pharmacy (Diploma)-02 years
              B. Pharmacy (degree)- 04 years
            </li>
            <li>
              Qualified & highly experienced Faculty (Ph. D.: 03 & M. Pharm.: 06)

            </li>
            <li>
              More than 80 Research Papers are published by faculty members in Reputed National and International Journals.
            </li>
            <li>
              Faculty members have attended various National and International Conferences & presented research papers.

            </li>
            <li>
              Soft Skill programme for students to improve communication skills with level Seminars & Guest lectures.

            </li>
            <li>Computer Labs with 25 systems, with wi-fi & high-speed internet facility and requisite application & system software.
            </li>
            <li>Seminar Hall & Class room with LCD Projectors.
            </li>
            <li>Full Automation of Library & College office.
            </li>
            <li>100% assistance for admission and higher education.
            </li>
            <li>Fees Scholarship to the students
            </li>
            <li>
              Sports Activities, Industrial Visit, Hospital visit, Cultural Programme for students.

            </li>
            <li>
              Extension Activities like Blood Donation Camp, Eye Checkup Camp, Save Girl Child Rally, Helping hand to Adharashram, etc.

            </li>
          </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Whyus;
