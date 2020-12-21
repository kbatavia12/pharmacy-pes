import React from "react";
import Navbar from "../components/Navbar";
import TrusteeCard from "../components/TrusteeCard";
import One from "../assets/Trustee1.png";
import Two from "../assets/Trustee2.png";
import Three from "../assets/Trustee3.png";
import "./css/Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="image-carousel"></div>
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
    </div>
  );
};

export default Home;
