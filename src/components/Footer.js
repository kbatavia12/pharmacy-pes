import React from "react";
import { Link } from "react-router-dom";
import "./css/Footer.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import DTE from "../assets/DTE APPROVAL.pdf";
// import AdmForm from '../assets/Admission Form D.Pharm (1).pdf';

const Footer = () => {
    return (
        <div className = "footer-main" >
            <div className="footer-top">
                <div className="link-container footer-container">
                    <h6 style={{ color: "white" }}>Quick Links</h6>
                    <Link to="/code-of-conduct">Code of Conduct</Link>
                    <Link to="/faculty-d">Faculty(D.Pharm)</Link>
                    <Link to="/faculty-b">Faculty(B.Pharm)</Link>
                    <Link to="/mission">Mission and Vision</Link>
                    <Link to="/syllabus">Syllabus (D.Pharm)</Link>
                    <Link to="/syllabus-b-pharm">Syllabus (B.Pharm)</Link>
                    <Link to="/why-pesiop">Why-PESIOP</Link>
                </div>
                <div className="location-container footer-container">
                    <h6 style={{ color: "white" }}>Location</h6>
                    <div className="address">
                        <LocationOnIcon
                            style={{ color: "white", marginLeft: "5px" }}
                        />
                        <div>
                            <p
                                style={{
                                    color: "white",
                                    marginBottom: 0,
                                    marginLeft: "5px",
                                }}
                            >
                                Sardar Shree Vallabhbhai Patel Nagar,
                            </p>
                            <p
                                style={{
                                    color: "white",
                                    marginBottom: 0,
                                    marginLeft: "5px",
                                }}
                            >
                                Vidya Nagar,Near Nimani Bus Stop,
                            </p>
                            <p
                                style={{
                                    color: "white",
                                    marginBottom: 0,
                                    marginLeft: "5px",
                                }}
                            >
                                Panchavati, Nashik-422003.
                            </p>
                        </div>
                    </div>
                    <div className="address">
                        <PhoneIcon
                            style={{ color: "white", marginLeft: "5px" }}
                        />
                        <p style={{ color: "white", marginLeft: "5px" }}>
                            +91 7741085506
                        </p>
                    </div>
                    <div className="address">
                        <PhoneIcon
                            style={{ color: "white", marginLeft: "5px" }}
                        />
                        <p style={{ color: "white", marginLeft: "5px" }}>
                            +91 9403706683
                        </p>
                    </div>
                    <div className="address">
                        <PhoneIcon
                            style={{ color: "white", marginLeft: "5px" }}
                        />
                        <p style={{ color: "white", marginLeft: "5px" }}>
                            (0253) 2514432
                        </p>
                    </div>
                </div>
                <div className="form-container footer-container">
                    <h6 style={{ color: "white" }}>About us</h6>
                    <Link to="/about">About PESIOP</Link>
                    <Link to="/principals-message">Principal's Message</Link>

                    {/* <Link to="/approval">Board of Governors</Link> */}

                    <Link to="/approval">Infrastructure</Link>
                    {/* <Link to="/approval">PEO's</Link> */}
                    <Link to="/gallery">Gallery</Link>
                </div>

                <div className="form-container footer-container">
                    <h6 style={{ color: "white" }}>Academics</h6>
                    <Link to="/approval">Library</Link>

                    <Link to="/academic-calendar">Academic Calendar</Link>
                </div>

                <div className="form-container footer-container">
                    <h6 style={{ color: "white" }}>Admission Form Link</h6>
                    <a href="https://forms.gle/xk5cVVJDnSMap7sB6">
                        <p>Admission Enquiry</p>
                    </a>
                    <Link to="/approval">Approvals and Affiliations</Link>
                </div>
            </div>
        
            <div className="footer-top">
                <div className="link-container footer-container">
                    <h6 style={{ color: "white" }}>Time Table</h6>
                    <Link to="/code-of-conduct">Examination</Link>
                    <Link to="/achievements">Student's Achievement</Link>
                    <Link to="/mission">Student's Activity</Link>
                    <Link to="/committees">Institutional Committees</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
