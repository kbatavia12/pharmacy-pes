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
      <LinkBar />



      <div>



        <div style={{ width: "100%", display: 'grid', placeItems: 'center', marginTop: '.5em' }} className="table-responsive" >

          <h4 style = {{marginTop: '2%'}} >Admissions are open as per rules and regulations of DTE / State Government.
          </h4>
          
          <h5>For more details contact: 0253-2514432 / 7741085506, 
          </h5>
          
          <h5 style = {{marginBottom: '2%'}} >Email: shree1pharmacy@gmail.com 
          </h5>

          <h5>Details of Course Offered</h5>

          <table style={{ width: '90%' }} class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Sr No.</th>
                <th scope="col">Program</th>
                <th scope="col">Intake</th>
                <th scope="col">DTE Code</th>
                <th scope="col">DTE Choice Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bachelor of Pharmacy</td>
                <td>60</td>
                <td>5488</td>
                <td>548882310</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Diploma in Pharmacy</td>
                <td>60</td>
                <td>5488</td>
                <td>548882310</td>
              </tr>
            </tbody>
          </table>
        </div>



        <div style={{ width: "100%", display: 'grid', placeItems: 'center', marginTop: '.5em' }} className="table-responsive" >
          <h5>Fees Structure for Bachelor of Pharmacy and Diploma in Pharmacy course for the Academic Year 2021-2022</h5>

          <table style={{ width: '90%' }} class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Program</th>
                <th scope="col">Tuition Fee. (Rs.)</th>
                <th scope="col">Development Fee (Rs.)</th>
                <th scope="col">Total Fee (Rs.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bachelor of Pharmacy</td>
                <td>63000</td>
                <td>7000</td>
                <td>70000</td>
                {/* <td>548882310</td> */}
              </tr>

              <tr>
                <td>Diploma in Pharmacy</td>
                <td>54545</td>
                <td>5455</td>
                <td>60000</td>
                {/* <td>548882310</td> */}
              </tr>
            </tbody>
          </table>
        </div>



        <div style={{ width: "100%", display: 'grid', placeItems: 'center', marginTop: '.5em' }} className="table-responsive" >
          <h5>Important Links for Admission Process:
          </h5>

          <table style={{ width: '90%' }} class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Program</th>
                <th scope="col">Brochures</th>
                <th scope="col">Link for admission process</th>
                {/* <th scope="col">Total Fee (Rs.)</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bachelor of Pharmacy</td>
                <td>Information Brochures</td>
                <td><a target="_blank" style={{ color: 'black' }} href="https://ph2021.mahacet.org/">https://ph2021.mahacet.org/</a></td>
                {/* <td>70000</td> */}
                {/* <td>548882310</td> */}
              </tr>

              <tr>
                <td>Diploma in Pharmacy</td>
                <td>Information Brochures</td>
                <td><a target="_blank" style={{ color: 'black' }} href="https://posthscdiploma2021.dtemaharashtra.gov.in/StaticPages/HomePage">https://posthscdiploma2021.dtemaharashtra.gov.in/StaticPages/HomePage</a></td>

                {/* <td>60000</td> */}
                {/* <td>548882310</td> */}
              </tr>
            </tbody>
          </table>
        </div>

      </div>



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
        <Marquee />
        <Footer />
      </div>
    </div>
  );
};

export default AdmissionProcedure;
