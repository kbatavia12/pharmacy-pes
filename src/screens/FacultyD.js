import React, { useState } from "react";
import FacultyCard from "../components/FacultyCard";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import "./css/Faculty.css";
import Footer from "../components/Footer";
import LinkBar from "../components/LinkBar";
import SJ from "../assets/Prof.Snehal D. Jadhav.jpg";
import PP from "../assets/Prof.Pallavi D. Pawar.jpg";
import AP from "../assets/Mrs.Anjali P.Pingale.jpg";
import KS from "../assets/Ms.Kiran J.Sonawane.jpg";
import PB from "../assets/Mrs.Priyanka S.Bhadane.jpg";
import Sunita from "../assets/Sunita.jpg";
import Pratibha from "../assets/Pratibha.jpg";
import Roohi from "../assets/Mrs. Roohi Jamal.jpg"

const staffDetails = [
  {
    name: "Mrs. Jamal Roohi",
    designation: "Head of Department",
    photo: Roohi,
    qualification: "M. Pharmacy",
    email: "roohijamal65@gmail.com"
  },
  {
    name: "Mrs. Sunita Narendra Mahale",
    designation: "Lecturer",
    photo: Sunita,
    qualification: "M.Pharm",
    email: "sunitamahale1607@gmail.com"
  }, {
    name: "Mrs. Shirsath Pratibha Gangadhar",
    designation: "Lecturer",
    photo: Pratibha,
    qualification: "M.Pharm",
    email: "pratibhashirsath11@gmail.com"
  },
  {
    name: "Mrs. Snehal Jadhav",
    designation: "Lecturer",
    photo: SJ,
    qualification: "M.Pharm",
    email: "snehalmalode88@gmail.com"
  },{
    name: "Mrs. Pallavi Dattatray Pawar",
    designation: "Lecturer",
    photo: PP,
    qualification: "M.Pharm",
    email: "palluugale@gmail.com"
  },{
    name: "Mrs.Anjali Prashant Pingale",
    designation: "Lecturer",
    photo: AP,
    qualification: "M.Pharm",
    email: "anjalippingale21@gmail.com"
  },{
    name: "Ms. Kiran Jaganrao Sonawane",
    designation: "Lecturer",
    photo: KS,
    qualification: "B.Pharm",
    email: "kiran17sonwane@gmail.com"
  }

]






const Faculty = () => {
  return (
    <div>
      <Navbar />
      <TitleBar text="Faculty" />
      <LinkBar />

      <div className="faculty-area-container">
        <div className="main-area">
          
          {staffDetails.map((staff, i) => (

            <FacultyCard
              key={i}
              image={staff.photo}
              name={`Name: ${staff.name}`}
              designation={`Designation: ${staff.designation}`}
              email={`Email: ${staff.email}`}
              qualification={`Qualification: ${staff.qualification}`}
            />
          ))} 
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Faculty;
