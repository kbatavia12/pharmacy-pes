import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TrusteeCard from "../components/TrusteeCard";
import One from "../assets/Trustee1.png";
import Two from "../assets/Trustee2.png";
import Three from "../assets/Trustee3.png";
import "./css/Home.css";
import Marquee from "../components/Marquee";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import HomeNav from "../components/HomeNav";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <TopBar/>
      <HomeNav />
      <div className="navigation-container">
        <Link to="/">Home</Link>
        <Link to="/admission">Admissions</Link>
        <Link to="/academic-calendar">Academics</Link>
        <Link to="/about">About</Link>
      </div>


      <div className="mobile-navigation">
        <div onClick={() => setShow(!show)} className="icon">
          <MenuIcon />
        </div>
        {show ? (
          <div className="mobile-navi-links">
            <Link to="/">Home</Link>
            <Link to="/admission">Admissions</Link>
            <Link to="/academic-calendar">Academics</Link>
            <Link to="/about">About</Link>
          </div>
        ) : null}
      </div>
      

      <div className="image-carousel">
      <Slider />

      </div>
      <div className="trustee-card-container">
        <TrusteeCard
          name="Narendrabhai Thakkar"
          title="[President]"
          image={One}
          info="It is indeed a pleasure for me to address you through this brochure. Shree Panchavati
                    Education Society is registered trust working in education field since last 57 years. The society
                    owns a land of 7 acres near Nimani Bus stand, Panchavati, Nashik. Society constructed new
                    building to provide essential carpet over to start New Diploma in Pharmacy course according to
                    norms of Pharmacy Council Of India.
                    We have also provided first class amenities in the new building to meet requirement of
                    modern educational standard. On behalf of society, I cordially invite you to personally visit our
                    campus. We are sure; you will appreciate our efforts to meet our standards of Pharmacy
                    education as per current requirements of pharmacy field"
        />

        <TrusteeCard
          name="Dr. Anil Badiyani"
          title="[Chairman]"
          image={Two}
          info="It is my privilege as the chairman of Shree Panchavati Education Society Institute of
          Pharmacy to extend you warm welcome to our campus and share few thoughts with you from our
          prospective .
          In recent years pharmacy profession has undergone a sea change with novel
          developments in the design, production, formulation and testing of drugs keeping pace with
          these charges the content of tools of Pharmacy education are also changed. Alongside, the role of
          pharmacist is refined with the increasing needs of his services to the society and profession.
          Our SPES Society Institute of Pharmacy shall commit you to become competent person
          in the Pharmacy field in near future. "
        />
        <TrusteeCard
          name="Digvijaybhai Kapadia"
          title="[Secretary]"
          image={Three}
          info="On behalf of Shree Panchavati Education Society Institute of Pharmacy I welcome you all.
          Being the secretary and powers bestowed to me by Shree Panchavati Education society , I
          hereby assure to budding pharmacist and encourage them to become a participant of our D.
          Pharm admitted list.
          Though ours is a new institution, we will be providing first class amenities, highly
          experienced teaching faculty, well equipped laboratories, good ventilated class rooms, tutorial
          rooms, library, reading room and advanced computer internet facilities in the institute. The
          institute is located at the centre of nashik city and thus students have easy commutation .
          We shall make exciting career for you in pharmacy so that you can work efficiently in India
          and worldwide"
        />
      </div>
      <Marquee />
      <Footer/>
    </div>
  );
};

export default Home;
