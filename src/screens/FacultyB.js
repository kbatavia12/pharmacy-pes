import React, { useState } from 'react'
import FacultyCard from '../components/FacultyCard';
import Footer from '../components/Footer';
import LinkBar from '../components/LinkBar';
import Navbar from '../components/Navbar';
import TitleBar from '../components/TitleBar';
import MT from "../assets/Manisha Tayde.png";
import YA from "../assets/Yogita Ahire.png";
import PU from "../assets/Prof.Pallavi G.Ugale.jpg";
import AC from "../assets/Prof.Amol R.Chavan.jpg";
import SG from "../assets/Mr.Sagar S.Ghate.jpg";
import RM from "../assets/Prof.Raj A. Mhaske.JPG";
import RG from "../assets/Dr.Rahul B. Ghuge.jpeg";
import MG from "../assets/Prof.Monali D.Ghodekar (Pund).jpg";
import KS from "../assets/Kokate S.V.jpeg";
import GC from '../assets/GC.jpg'
import RD from '../assets/RD.jpg'


const staffDetails = [
    {
        name: "Dr.Manisha Ashwin Tayde ",
        designation: "In-charge Principal",
        photo: MT,
        qualification: "M.Pharm Ph.D",
        email: "mtayde82@gmail.com"
    },{
        name: "Dr.Ghanshyam N.Chaudhari ",
        designation: "Associate Professor",
        photo: GC,
        qualification: "M.Pharm,Ph.D. (Pharmaceutics) ",
        email: ""
    },

    {
        name: "Mrs. Yogita Girish Ahire",
        designation: "Assistant Professor",
        photo: YA,
        qualification: "M.Pharm",
        email: "yogitaahire111219@gmail.com"
    },
    {
        name: "Mr.Kokate Shekhar Vikram",
        designation: "Assistant Professor",
        photo: KS,
        qualification: "M.Pharmacy (QAT)",
        email: "shekhar543213@gmail.com"
    },
    {
        name: "Mrs. Pallavi Gaurav Ugale",
        designation: "Assistant Professor",
        photo: PU,
        qualification: "M.Pharm",
        email: "palluugale@gmail.com"
    },
    {
        name: "Mr. Amol Ravindra Chavan",
        designation: "Assistant Professor",
        photo: AC,
        qualification: "M.Pharm",
        email: "amolrc25@gmail.com"
    }, {
        name: "Mr. Rajratan Ashokrao Maske",
        designation: "Assistant Professor",
        photo: RM,
        qualification: "M.Pharm",
        email: "mraj80551@gmail.com"
    }, {
        name: "Mrs. Monali Dnyaneshwar Ghodekar",
        designation: "Associate professor",
        photo: MG,
        qualification: "M.Pharm",
        email: "monalighodekar7@gmail.com"
    },
    
    {
        name: " Dr. Rupali Sampatrao Dhikale",
        designation: "Assistant Professor",
        photo: RD,
        qualification: "Ph. D (M. Pharm in Pharmacognosy)",
        email: "rupadhikale@gmail.com"
    },



]

const FacultyB = () => {


    return (
        <div>
            <Navbar />
            <TitleBar text="Faculty (B.Pharm)" />
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
    )
}

export default FacultyB;
