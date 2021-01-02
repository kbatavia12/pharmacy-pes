import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import DTE from '../assets/DTE APPROVAL.pdf';
import AdmForm from '../assets/Admission Form D.Pharm (1).pdf';


const Footer = () => {
  return (
    <div className="footer">
      <div className="link-container">
        <h1 style={{ color: "white" }}>Quick Links</h1>
        <Link to="/code-of-conduct">Code of Conduct</Link>
        <Link to="/faculty">Faculty</Link>
        <Link to="/mission">Mission and Vision</Link>
        <Link to="/syllabus">Syllabus for D.Pharm</Link>
        <Link to="/why-pesiop">Why-PESIOP</Link>
      </div>
      <div className="location-container">
        <h1 style={{ color: "white" }}>Location</h1>
        <div className="address">
          <LocationOnIcon style={{ color: "white", marginLeft: "5px" }} />
          <div>
            <p style={{ color: "white", marginBottom: 0, marginLeft: "5px" }}>
              Sardar Shree Vallabhbhai Patel Nagar, Vidya Nagar,
            </p>
            <p style={{ color: "white", marginBottom: 0, marginLeft: "5px" }}>
              Near Nimani Bus Stop, Panchavati, Nashik-422003.
            </p>
          </div>
        </div>
        <div className="address">
          <PhoneIcon style={{ color: "white", marginLeft: "5px" }} />
          <p style={{ color: "white", marginLeft: "5px" }}>(0253) 2952295</p>
        </div>
        <div className="address">
          <PhoneIcon style={{ color: "white", marginLeft: "5px" }} />
          <p style={{ color: "white", marginLeft: "5px" }}>(0253) 2510386</p>
        </div>
        <div className="address">
          <PhoneIcon style={{ color: "white", marginLeft: "5px" }} />
          <p style={{ color: "white", marginLeft: "5px" }}>(0253) 2512489</p>
        </div>
      </div>
      <div className = "form-container" >
        <h3 style={{ color: "white" }}>Admission Form Link</h3>
        <a download href={AdmForm}>
          <p>Admission Enquiry</p>
        </a>
        <Link to = "/approval" >
          Approvals and Affiliations
        </Link>
      </div>
    </div>
  );
};

export default Footer;
