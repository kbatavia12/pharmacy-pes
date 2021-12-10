import React from "react";
import LinkBar from "../components/LinkBar";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const StudentAchievements = () => {
    return (
        <div>
            <Navbar />
            <TitleBar text="Student's Achievements" />
            <LinkBar />



        <div style = {{width: "100%", display: 'grid', placeItems: 'center', marginTop: '.5em'}} className = "table-responsive" >


            <table style = {{width: '90%'}} class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Sr No.</th>
                        <th scope="col">Type of Activity</th>
                        <th scope="col">Name of participating student</th>
                        <th scope="col">Organizing body</th>
                        <th scope="col">Award winner/ participation</th>
                        <th scope="col">Level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Online mind mapping</td>
                        <td>Sawant Pritam </td>
                        <td>MET IOP, Mumbai</td>
                        <td>Second position</td>
                        <td>National</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Online Yoga competition</td>
                        <td>Walbe Aishwarya</td>
                        <td>SVSS’s Latur College of Pharmacy,Latur</td>
                        <td>First Position </td>
                        <td>State</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Online Essay competition</td>
                        <td>Aware Mahima</td>
                        <td>SVSS’s Latur College of Pharmacy,Latur</td>
                        <td>Second position</td>
                        <td>State</td>
                    </tr>
                    
                    <tr>
                        <th scope="row">4</th>
                        <td>Debate Competition</td>
                        <td>Mahale Ajinkya</td>
                        <td>Samarth Institute of Pharmacy, Sakri, Dhule</td>
                        <td>Second position</td>
                        <td>State</td>
                    </tr>
                    
                    <tr>
                        <th scope="row">5</th>
                        <td>E-Poster Presentation</td>
                        <td>Mahale Ajinkya</td>
                        <td>SVSS’s Latur College of Pharmacy,Latur</td>
                        <td>Second position</td>
                        <td>State</td>
                    </tr>
                    
                    <tr>
                        <th scope="row">5</th>
                        <td>E-Poster Presentation</td>
                        <td>Mahale Ajinkya</td>
                        <td>SVSS’s Latur College of Pharmacy,Latur</td>
                        <td>Second position</td>
                        <td>State</td>
                    </tr>
                    
                    <tr>
                        <th scope="row">6</th>
                        <td>E-Poster Presentation</td>
                        <td>Mahale Ajinkya</td>
                        <td>Vasantidevi Patil Institute of Pharmacy, Kolhapur</td>
                        <td>Third position</td>
                        <td>State</td>
                    </tr>
                    
                    <tr>
                        <th scope="row">7</th>
                        <td>Online Pharma Quiz Competition</td>
                        <td>Patait mansi</td>
                        <td>Delight Institute of pharmacy, Shirur</td>
                        <td>Third Position</td>
                        <td>State</td>
                    </tr>
                </tbody>
            </table>
        </div>

        </div>
    );
};

export default StudentAchievements;
