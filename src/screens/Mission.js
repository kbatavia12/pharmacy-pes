import React from "react";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import "./css/Mission.css";

const Mission = () => {
  return (
    <div className="mission-container">
      <Navbar />
      <TitleBar text="Mission and Vision" />
      <div className="mission-area-container">
        
        <div className="mission-main-area">
          <h2>Vision and Mission</h2>
          <p className = "bigText">
            “HEALTH FOR ALL IS NATIONAL AND UNIVERSAL GOAL”
            </p>
            <p>
              To achieve this goal we are going to conduct educational program
              of pharmacy to add eligible and quality professional technical man
              power to work in the field of.
            </p>
            <p> Industrial Pharmacy</p>
            <p> Hospital and clinical Pharmacy</p>
            <p>Community Pharmacy</p>
            <p> Pharmaceutical Management and administration</p>
            
            
            <p className = "bigText" >
              Pharmaceutical Research As per current requirement of the society,
              the following are the objectives:{" "}
            </p>
            <p>
              1. To induce intellectual skills and motor skills in students by
              maintain proper teacher student ratio
            </p>
            <p>
              2. To add quality and efficient manpower this is required
              currently for pharmacy field in India as well as worldwide.
            </p>
            <p>3. To give help and support low learners.</p>
            <p>4. To pay attention to low achiever in the class.</p>

        </div>
      </div>
        <Marquee/>
        <Footer/>
    </div>
  );
};

export default Mission;
