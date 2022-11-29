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
            <a target="_blank" href="https://www.vmedulife.com/public/auth/#/login/spesiop-nashik">ERP Login</a>
          </div>
        ) : null}
      </div>


      {/* <div className="image-carousel">
        <Slider />
      </div> */}

      {/* <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2%', marginBottom: '2%'}} >
          <img style = {{}}  src = {New}/>
        </div> */}

      <div className="main-area">
        <h2>About us</h2>
        <img style ={{width: '50%'}}src="https://firebasestorage.googleapis.com/v0/b/school-test-app-e4e31.appspot.com/o/1_Photo%20-%201.jpg?alt=media&token=71ea7714-745c-4459-b79e-eaf22c4b1cb5"></img>
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


        </div>

        <div style={{ width: "100%", display: 'grid', placeItems: 'center', marginTop: '.5em' }} className="table-responsive" >
          <div style={{ border: '1px solid black', display: 'grid', placeItems: 'center', padding: '1%', width: '50%' }} >
            <a className="ragging-link" style={{ color: "black" }} href="https://www.antiragging.in/Site/Contactus.aspx" >National Anti Ragging Help Line (UGC Crisis Hotline) 24x7
            </a>


            <h5>Phone No. 1800-180-5522</h5>
            <h5>Email: helpline@antiragging.in</h5>
          </div>
        </div>


        <div style={{ width: "100%", display: 'grid', placeItems: 'center', marginTop: '1em' }} className="table-responsive" >
          <h1>Right to Information Committee</h1>
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


        <Footer />
      </div>
      );
};

      export default Home;
