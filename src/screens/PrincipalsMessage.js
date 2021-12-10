import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LinkBar from '../components/LinkBar';
import Navbar from '../components/Navbar';
import TitleBar from '../components/TitleBar';
import PrincipalB from '../assets/PrincipalB.jpg'

const PrincipalsMessage = () => {
    return (
        <div>
            <Navbar />
            <TitleBar text="Principal's Message" />
            <LinkBar />

            <div style={{ width: '50%', textAlign: 'justify', marginLeft: '2%' }} >
                <h1>Principal's <em style={{ color: '#2ecc71' }} >Message</em></h1>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '.5em', marginBottom: '.5em' }} >
                    <img width="30%" src={PrincipalB} />
                </div>

                <p style={{ margin: 0 }} ><em style={{ color: '#0070c0' }} >Shree Panchavati Education Society Institute of Pharmacy (SPESIOP)</em> is committed to training the next generation of pharmacy practitioners, leaders, and innovators. Our Diploma and Bachelor of Pharmacy programmes are designed to produce graduates with complete pharmaceutical care skills, excellent interpersonal skills, outstanding moral character, strong problem-solving skills, and the ultimate professional commitment to the patient, community, and employer.
                </p>
                <p> At SPESIOP, our students engage with highly qualified faculty members in innovative classes, problem-based learning groups, and labs in state-of-the-art facilities. Classroom learning is enhanced with real-world pharmacy experience starting in the first year of the program. With over four years of pharmacy practice experience in college, industry, hospitals, community pharmacies, and medical clinics, employers should call our graduates the most proficient Pharmacists..</p>
                <div>

                    <p style={{ margin: 0 }} ><strong>Dr. Makarand S. Gambhire</strong></p>
                    <p style={{ margin: 0 }} ><strong>M. Pharm., Ph.D.</strong></p>
                </div>
            </div>

        </div >
    )
}

export default PrincipalsMessage;
