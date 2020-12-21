import React from "react";
import FacultyCard from "../components/FacultyCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SidebarLink from "../components/SidebarLink";
import TitleBar from "../components/TitleBar";
import Principal from "../assets/Patel mam.jpg";
import Sarika from "../assets/sarika mam.jpg";
import Suchita from "../assets/suchita mam.jpg";
import Mayur from "../assets/Mayur sir.jpg";
import "./css/Faculty.css";

const Faculty = () => {
  return (
    <div>
      <Navbar />
      <TitleBar text="Faculty" />
      <div className="faculty-area-container">
        <div className="sidebar">
          <Sidebar>
            <SidebarLink />
            <SidebarLink />
            <SidebarLink />
            <SidebarLink />
            <SidebarLink />
          </Sidebar>
        </div>
        <div className="main-area">
          <FacultyCard
            image={Principal}
            name="Name: Smt.Manjula Bhimbhai Patel"
            designation="Designation: Principal"
            email="Email: xyz@gmail.com"
            qualification="Qualification:M.Pharm"
          />{" "}
          <FacultyCard
            image={Sarika}
            name="Name: Mrs. Sarika Vinayak Patel"
            designation="Designation: Lecturer"
            email="Email: sarikashindepatil@gmail.com"
            qualification="Qualification: M.Pharm"
          />{" "}
          <FacultyCard
            image={Suchita}
            name="Name: Mrs. Suchita Yogeshwar Shirsat"
            designation="Designation: Lecturer"
            email="Email: suchita.shirsath@gmail.com"
            qualification="Qualification: M.Pharm(Quality assurance technique)"
          />{" "}
          <FacultyCard
            image={Mayur}
            name="Name: Mr. Sawant Mayur Popat "
            designation="Designation: Lecturer"
            email="Email: sawant.mayur25@gmail.com"
            qualification="Qualification: M.Pharm"
          />
        </div>
      </div>
    </div>
  );
};

export default Faculty;
