import React from "react";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import DTE from "../assets/DTE APPROVAL.pdf";
import PCI from "../assets/Decision Letter PCI (2021-2022).pdf";
import DBATU from "../assets/DBATU Affiliation A Y 2021-22.pdf";
import GR from "../assets/G. R. for B. Pharmacy.pdf";
import MSBTE from "../assets/MSBTE Affiliation 21-22.pdf";
import LinkBar from "../components/LinkBar";

const Approval = () => {
  return (
    <div>
      <Navbar />
      <TitleBar text="Approvals and Affiliations" />
      <LinkBar/>

      <div className="main-area">
        <h1>DBATU Affiliation</h1>
        <object
          className="staff-pdfFile"
          data={DBATU}
          type="application/pdf"
          width="75%"
          height="800px"
        ></object>
        
        <h1>Decision Letter PCI</h1>
        <object
          className="staff-pdfFile"
          data={PCI}
          type="application/pdf"
          width="75%"
          height="800px"
        ></object>
        
        
        <h1>DTE Approval</h1>
        <object
          className="staff-pdfFile"
          data={DTE}
          type="application/pdf"
          width="75%"
          height="800px"
        ></object>
        
        
        <h1>G.R For B.Pharmacy</h1>
        <object
          className="staff-pdfFile"
          data={GR}
          type="application/pdf"
          width="75%"
          height="800px"
        ></object>
        
        <h1>MSBTE Affiliation</h1>
        <object
          className="staff-pdfFile"
          data={MSBTE}
          type="application/pdf"
          width="75%"
          height="800px"
        ></object>
      </div>
    </div>
  );
};

export default Approval;
