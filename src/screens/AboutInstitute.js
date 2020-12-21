import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SidebarLink from "../components/SidebarLink";
import TitleBar from "../components/TitleBar";
import Marquee from "../components/Marquee";
import "./css/AboutInstitute.css";

const AboutInstitute = () => {
  return (
    <div className="about-container">
      <Navbar />
      <TitleBar text="About Us" />

      <div className="about-area-container">
        <div className="sidebar">
          <Sidebar>
            <SidebarLink />
            <SidebarLink />
            <SidebarLink />
            <SidebarLink />
          </Sidebar>
        </div>
        <div className="main-area">
          <h2>About us</h2>
          <img src="https://firebasestorage.googleapis.com/v0/b/school-test-app-e4e31.appspot.com/o/1_Photo%20-%201.jpg?alt=media&token=71ea7714-745c-4459-b79e-eaf22c4b1cb5"></img>
          <p>
            Shree Panchavati Education Society is registered trust working in
            education field since last 57 years. The society owns a land of 7
            acres near Nimani Bus stand, Panchavati, Nashik. Society constructed
            new building to provide essential carpet over to start New Diploma
            in Pharmacy course according to norms of Pharmacy Council Of India.
            We have also provided first class amenities in the new building to
            meet requirement of modern educational standard. On behalf of
            society, I cordially invite you to personally visit our campus. We
            are sure; you will appreciate our efforts to meet our standards of
            Pharmacy education as per current requirements of pharmacy field.
          </p>
          <p>
            In recent years pharmacy profession has undergone a sea change with
            novel developments in the design, production, formulation and
            testing of drugs keeping pace with these charges the content of
            tools of Pharmacy education are also changed. Alongside, the role of
            pharmacist is refined with the increasing needs of his services to
            the society and profession. Our SPES Society’s Institute of Pharmacy
            shall commit you to become competent person in the Pharmacy field in
            near future.
          </p>
          <p>
            {" "}
            Though ours is a new institution, we will be providing first class
            amenities, highly experienced teaching faculty, well equipped
            laboratories, good ventilated class rooms, tutorial rooms, library,
            reading room and advanced computer internet facilities in the
            institute. The institute is located at the centre of nashik city and
            thus students have easy commutation . We shall make exciting career
            for you in pharmacy so that you can work efficiently in India and
            worldwide.
          </p>

          <br></br>
          <h1>Our Patrons</h1>
          <h4>
            Welcome to Institute of Pharmacy of SHREE PANCHAVATI EDUCATION
            SOCIETY
          </h4>
          <div className = "letter-area" >
            <p>
              The institute is consistently striving hard to achieve highest
              quality in every sphere of activity in order to shape your future
              as Pharmacist.
            </p>
            <p>
              Our focus is to achieve this commitment to you by bringing in the
              philosophy that industry and education must co-exist while
              knowledge and experience will continuously and dynamically keep
              the students performing at the peak level, present and in the
              future.
            </p>
            <p>
              The institute has adopted the best features of the education to
              equip you with attributes to succeed in fiercely competitive
              business world with grace and without compromising with universal
              values.
            </p>
            <p>
              With the commitment and focus as enunciated here, our objective is
              to offer you a world-class program, designed to help each student
              realize full potential at an affordable cost.
            </p>
            <p>
              We find it obligatory to take care of you in all aspects of life
              from now on leading to a lifetime relationship. Our teaching is
              focused on Pharma business world and its need through our
              personalized and interactive teaching methods. I am sure my
              committed faculty and staff will strive hard to transcend you all
              into prospective young Pharmacists with globally compatible skills
              and knowledge.
            </p>
            <p>
              I am pleased to note the progress that we are making in the
              direction of making this institute one of the best in India. I
              once again invite you to join hands with us in this life long
              partnership in relentless pursuit to world-class excellence.
            </p>
            <h5>Chairman and Managing Director</h5>
          </div>
        </div>
      </div>
      <Marquee />
    </div>
  );
};

export default AboutInstitute;
