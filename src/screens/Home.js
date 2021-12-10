import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TrusteeCard from "../components/TrusteeCard";
import One from "../assets/Trustee1.png";
import Two from "../assets/Trustee2.png";
import Three from "../assets/Trustee3.jpeg";
import "./css/Home.css";
import Marquee from "../components/Marquee";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import HomeNav from "../components/HomeNav";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import LinkBar from "../components/LinkBar";
import New from '../assets/New.png'

const Home = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {/* <TopBar/> */}
      <HomeNav />

      <LinkBar />

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

      {/* <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2%', marginBottom: '2%'}} >
          <img style = {{}}  src = {New}/>
        </div> */}


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
          name="Vikram Kapadia"
          title="[Secretary]"
          image={Three}
          info="On behalf of the Shree Panchavati Education Society’s Institute of Pharmacy, I welcome you all. Being the secretary and with powers bestowed on me by the Shree Panchavati Education Society, I hereby assure budding pharmacists and encourage them to become participants in our D.Pharm and B.Pharm admitted lists. Though ours is a new institution, we will be providing first-class amenities, highly experienced teaching faculty, well-equipped laboratories, well ventilated classrooms, tutorial rooms, and advanced computer internet facilities in the institute. The institute is located at the centre of Nashik city, and thus, students have easy access to transportation. We shall prepare you for an exciting career in pharmacy so that you can work efficiently in India and worldwide."
        />
      </div>

      <div style={{ width: "100%", display: 'grid', placeItems: 'center', marginTop: '.5em' }} className="table-responsive" >
        <div style = {{ border: '1px solid black', display: 'grid', placeItems: 'center', padding: '1%', width: '50%'}} >
          <a style={{ color: "black" }} href="https://www.antiragging.in/Site/Contactus.aspx" >National Anti Ragging Help Line (UGC Crisis Hotline) 24x7
          </a>


          <h5>Phone No. 1800-180-5522</h5>
          <h5>Email: helpline@antiragging.in</h5>
        </div>
      </div>


      <div style={{ width: "100%", display: 'grid', placeItems: 'center', marginTop: '.5em' }} className="table-responsive" >

        <table style={{ width: '90%' }} class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Name of Members (Designation)</th>
              <th scope="col">Designation</th>
              <th scope="col">Contact No.</th>
              {/* <th scope="col">DTE Choice Code</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dr. Gambhire Makarand Suresh
                (Principal)
              </td>
              <td>Appealing Officer

              </td>
              <td>0253-2514432

              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Mrs. Patil Sarika Vinayak (Lecturer)

              </td>
              <td>Information Officer

              </td>
              <td>7720002333</td>
            </tr>


            <tr>
              <td>3</td>
              <td>Mr. Khairnar Rakesh Chandrakant
                (Office Superintendent)


              </td>
              <td>Information Officer



              </td>
              <td>9834563650</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Marquee />
      <Footer />
    </div>
  );
};

export default Home;
