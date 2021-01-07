import React from "react";
import Footer from "../components/Footer";
import LinkBar from "../components/LinkBar";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import "./css/AdmissionProcedure.css";



const AdmissionProcedure = () => {
  return (
    <div className="admission-container">
      <Navbar />
      <TitleBar text="Admission Procedure" />
      <LinkBar/>

     
      <div className="admission-area-container">
        
        
        <div className="main-area">
          {/* Main area */}
          <div>
            <h2>Admission Procedure</h2>
            <p>
              The admission process is governed by the Directorate of Technical
              Education (DTE), Mumbai to ensure its transparency, fairness and
              objectiveness. Candidates selected for admission in this institute
              and desirous of taking admission in this Institute are required to
              complete the admission formalities on or before stipulated date.
              The formalities include.
            </p>

            <p>• Payment of fees as shown in the schedule of fees.</p>
            <p>• Two passport size photographs</p>
            <p>
              • Completed institute application form • Admission could be
              rejected for any non-submission of any of the specified documents.
            </p>
            <p>
              • Original plus two Xerox copies duly attested of all the
              documents mentioned in the application form.
            </p>
            <p>
              •The claim for admission will be lost if the admission is not
              secured by completing all the formalities within the specified
              time.
            </p>
            <p>• For further details refer website www.dte.org.in</p>
          </div>
          <div>
            <h2>Objectives</h2>
            <p>
              Discipline will be upheld as a positive value, promoting the
              educational and social engagement of all students within the
              Institute. This concept of discipline is closely related to
              Institute effectiveness mainly through:
            </p>
            <p>• Good leadership and Institute organisation.</p>
            <p>• Appropriate values, ethos, and aspirations;</p>
            <p>• Motivated staff.</p>
            <p>
              The Discipline shall be responsible for the co-ordination of
              policies, procedures and activities that encourage good behaviour
              in the school communities within the Institute. The Continuing
              Professional Development(CPD) shall be a resource person who
              offers support in this area to the whole institute community in
              liaison with the Institute Counsellor and the students’ services
              team.
            </p>
          </div>
          <div>
            <h2>Eligibility</h2>
            <p> • The candidate should be an Indian national.</p>
            <p>
              • Passed HSC Science with Physics and Chemistry as compulsory
              subjects along with one of the subjects : Mathematics or Biology
              from a recognised institution in Maharashtra State or Outside
              Maharashtra State.
            </p>
          </div>
        </div>
      </div>
      <div>
          <Marquee/>
          <Footer/>
        </div>
    </div>
  );
};

export default AdmissionProcedure;
