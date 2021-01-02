import React from "react";
import "./css/TopBar.css";
import DTE from '../assets/DTE APPROVAL.pdf';
import AdmForm from '../assets/Admission Form D.Pharm (1).pdf';


const TopBar = () => {
  return (
    <div className="top-bar">
      <a download href = {AdmForm} >
        <p className = "top-barLink">Admission Enquiry</p>
      </a>
      <a  download href = {DTE} >
        <p className = "top-barLink" >DTE Approval</p>
      </a>
      <a className = "top-barLink">
        <p className = "top-barLink">(0253) 2952295</p>
      </a>
    </div>
  );
};

export default TopBar;
