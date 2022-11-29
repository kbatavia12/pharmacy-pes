import React from "react";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import Marquee from "../components/Marquee";
import "./css/AboutInstitute.css";
import Footer from "../components/Footer";
import LinkBar from "../components/LinkBar";
import TrusteeCard from "../components/TrusteeCard";
import One from "../assets/Trustee1.png";
import Two from "../assets/Trustee2.png";
import Three from "../assets/DSC_4248.JPG";



const AboutInstitute = () => {
  return (
    <div className="about-container">
      <Navbar />
      <TitleBar text="About Us" />
      <LinkBar/>

      <div className="trustee-card-container">
        <TrusteeCard
          name="Narendrabhai Thakkar"
          title="[President]"
          image={One}
          info="It is indeed a pleasure for me to address you through this brochure. Shree Panchavati Education Society is a registered trust working in the education field since 1933. The society owns land of 7 acres near Nimani Bus Stand, Panchavati, Nashik. The society constructed buildings to provide essential carpets to start Diploma and Degree programmes in Pharmacy according to the norms of the Pharmacy Council of India. We have also provided first-class amenities in the building to meet the requirements of modern educational standards. On behalf of society, I cordially invite you to personally visit our campus. We are sure you will appreciate our efforts to meet our standards of Pharmacy education as per current requirements of the pharmacy field."
        />

        <TrusteeCard
          name="Dr. Anil Badiyani"
          title="[Chairman]"
          image={Two}
          info="It is my privilege as the Chairman of the Shree Panchavati Education Society Institute of Pharmacy to extend to you a warm welcome to our campus and share a few thoughts with you from our perspective. In recent years, the pharmacy profession has undergone a sea change with novel developments in the design, production, formulation, and testing of drugs. Keeping pace with these changes, the content of tools of pharmacy education has also changed. Along the way, the pharmacist's role is evolving in response to the growing demand for his services to society and the profession. Our SPES Institute of Pharmacy will commit you to becoming a competent person in the pharmacy field in the future"
        />
        <TrusteeCard
          name="Rajeshbhai Thakkar"
          title="[Secretary]"
          image={Three}
          info="On behalf of the Shree Panchavati Education Society’s Institute of Pharmacy, I welcome you all. Being the secretary and with powers bestowed on me by the Shree Panchavati Education Society, I hereby assure budding pharmacists and encourage them to become participants in our D.Pharm and B.Pharm admitted lists. Though ours is a new institution, we will be providing first-class amenities, highly experienced teaching faculty, well-equipped laboratories, well ventilated classrooms, tutorial rooms, and advanced computer internet facilities in the institute. The institute is located at the centre of Nashik city, and thus, students have easy access to transportation. We shall prepare you for an exciting career in pharmacy so that you can work efficiently in India and worldwide."
        />
      </div>
      
      <Footer/>
    </div>
  );
};

export default AboutInstitute;
