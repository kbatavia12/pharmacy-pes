import React from 'react'
import LinkBar from '../components/LinkBar';
import Navbar from '../components/Navbar';
import TitleBar from '../components/TitleBar';
import CommitteesI from '../assets/List of Committee  26.11.2022.pdf';

const Committees = () => {
    return (
        <div>
            <Navbar />
            <TitleBar text="Student's Achievements" />
            <LinkBar />



            <div className="main-area">

                <h2>Institutional Committees</h2>
                <object
                    className="staff-pdfFile"
                    data={CommitteesI}
                    type="application/pdf"
                    width="75%"
                    height="800px"
                ></object>
            </div>


            {/* <div style={{ width: "100%", display: 'grid', placeItems: 'center', marginTop: '.5em' }} className="table-responsive" >


                <table style={{ width: '90%' }} class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Sr No.</th>
                            <th scope="col">Name of the member</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Committee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Shri. Narendrabhai Thakkar</td>
                            <td>President, PES</td>
                            <td>Chairman</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Shri Gopalbhai Patel</td>
                            <td>Vice President, PES</td>
                            <td>Member</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Shri.Devendrabhai Patel</td>
                            <td>Secretory, PES</td>
                            <td>Member</td>
                        </tr>

                        <tr>
                            <th scope="row">4</th>
                            <td>Shri. Vikrambhai Kapadia</td>
                            <td>Secretary, SPESIOP</td>
                            <td>Member</td>
                        </tr>

                        <tr>
                            <th scope="row">5</th>
                            <td>Shri Abhaybhai Choksi</td>
                            <td>Trustee, PES</td>
                            <td>Member</td>
                        </tr>

                        <tr>
                            <th scope="row">6</th>
                            <td>Directorate of Technical Education
                                Nominee
                            </td>
                            <td>Director, Directorate of Technical Education, Maharashtra state.</td>
                            <td>Ex-officio member</td>
                        </tr>

                        <tr>
                            <th scope="row">7</th>
                            <td>Dr. Babasaheb Ambedker Technological University
                                Nominee
                            </td>
                            <td>Registrar, Dr. Babasaheb Ambedker Technological University, Lonere.</td>
                            <td>Ex-officio member</td>
                        </tr>


                        <tr>
                            <th scope="row">8</th>
                            <td>Maharashtra State Board of Technical Education
                                Nominee
                            </td>
                            <td>Deputy Secretary, Maharashtra State Board of Technical Education, Mumbai</td>
                            <td>Ex-officio member</td>
                        </tr>

                        <tr>
                            <th scope="row">9</th>
                            <td>Dr. Rajendra S. Bhambar</td>
                            <td>Principal, MGV’s College of Pharmacy, Panchavati, Nashik</td>
                            <td>Member
                                (Academician)
                            </td>

                        </tr><tr>
                            <th scope="row">10</th>
                            <td>Dr. Sanjay J. Kshirsagar</td>
                            <td>Principal, MET Institute of Pharmacy, BKC, Nashik</td>
                            <td>Member
                                (Academician)
                            </td>
                        </tr><tr>
                            <th scope="row">11</th>
                            <td>Mr. Rajgopal Mundada</td>
                            <td>Managing Director, Bliss Infusion and Surgicals Pvt. Ltd, Nashik</td>
                            <td>Member
                                (Industrialist)
                            </td>
                        </tr><tr>
                            <th scope="row">12</th>
                            <td>Smt. Manjula B. Patel</td>
                            <td>Head of Department</td>
                            <td>Member</td>
                        </tr><tr>
                            <th scope="row">13</th>
                            <td>Dr. Makarand S. Gambhire</td>
                            <td>Professor and In-Charge Principal</td>
                            <td>Member Secretary</td>

                        </tr>
                    </tbody>
                </table> */}
            {/* </div> */}

        </div>
    )
}

export default Committees;
