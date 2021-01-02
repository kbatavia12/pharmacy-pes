import React from "react";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import DTE from "../assets/DTE APPROVAL.pdf";

const Approval = () => {
  return (
    <div>
      <Navbar />
      <TitleBar text="Approvals and Affiliations" />

      <div className="main-area">
        <h1>PCI Decision Letter</h1>
        <img style  ={{width: "75%"}} src="https://firebasestorage.googleapis.com/v0/b/database-entry-69b80.appspot.com/o/PCI%20Decision%20Letter.jpg?alt=media&token=6589215e-42cc-4b2a-9f1d-1f733bed990f"></img>

        <h1>DTE Approval</h1>
        <object
          className="staff-pdfFile"
          data={DTE}
          type="application/pdf"
          width="75%"
          height="800px"
        ></object>

        <h1>MSBTE Certificate</h1>
        <img style = {{width: "75%"}} src="https://firebasestorage.googleapis.com/v0/b/database-entry-69b80.appspot.com/o/MSBTE%20Certificate.jpg?alt=media&token=757f7c74-e317-4515-aef2-8d9b27757787"></img>
      </div>
    </div>
  );
};

export default Approval;
