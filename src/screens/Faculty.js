import React, { useState } from "react";
import FacultyCard from "../components/FacultyCard";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import Principal from "../assets/Patel mam.jpg";
import Sarika from "../assets/sarika mam.jpg";
import Suchita from "../assets/suchita mam.jpg";
import Mayur from "../assets/Mayur sir.jpg";
import PrincipalPdf from "../assets/STAFF PROFILE Smt Manjula Patel.pdf";
import SarikaPdf from "../assets/Sarika Vinayak Patil profile.pdf";
import SuchitaPdf from "../assets/STAFF PROFILE Suchita Yogeshwar Shirsath.pdf";
import MayurPdf from "../assets/STAFF PROFILE MS.pdf";
import "./css/Faculty.css";
import Marquee from "../components/Marquee";
import Footer from "../components/Footer";

const Faculty = () => {
  
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  
  return (
    <div>
      <Navbar />
      <TitleBar text="Faculty" />
      <div className="faculty-area-container">
        <div className="main-area">
          <FacultyCard
            pressHandler = {() => setShow1(!show1)}
            image={Principal}
            name="Name: Smt.Manjula Bhimbhai Patel"
            designation="Designation: Principal"
            email="Email: manju.patel1479@gmail.com"
            qualification="Qualification: M.Pharm"
          />
         {show1 ?  <object
            className="staff-pdfFile"
            data={PrincipalPdf}
            type="application/pdf"
            width="110%"
            height="800px"
          ></object> : null}
          <FacultyCard
            pressHandler = {() => setShow2(!show2)}
            image={Sarika}
            name="Name: Mrs. Sarika Vinayak Patil"
            designation="Designation: Lecturer"
            email="Email: sarikashindepatil@gmail.com"
            qualification="Qualification: M.Pharm"
          />
          {show2 ? <object
            className="staff-pdfFile"
            data={SarikaPdf}
            type="application/pdf"
            width="110%"
            height="800px"
          ></object>: null}
          <FacultyCard
            pressHandler = {() => setShow3(!show3)}
            image={Mayur}
            name="Name: Mr. Sawant Mayur Popat "
            designation="Designation: Lecturer"
            email="Email: sawant.mayur25@gmail.com"
            qualification="Qualification: M.Pharm"
          />
          {show3 ? <object
            className="staff-pdfFile"
            data={MayurPdf}
            type="application/pdf"
            width="110%"
            height="800px"
          ></object> : null}
          <FacultyCard
            pressHandler = {() => setShow4(!show4)}

            image={Suchita}
            name="Name: Mrs. Suchita Yogeshwar Shirsath"
            designation="Designation: Lecturer"
            email="Email: suchita.shirsath@gmail.com"
            qualification="Qualification: M.Pharm(Quality assurance technique)"
          />{" "}
         {show4 ? <object
            className="staff-pdfFile"
            data={SuchitaPdf}
            type="application/pdf"
            width="110%"
            height="800px"
          ></object> : null}
        </div>
      </div>
      <Marquee />
      <Footer />
    </div>
  );
};

export default Faculty;
