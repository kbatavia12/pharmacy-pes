import React from 'react'
import FacultyCard from '../components/FacultyCard';
import Footer from '../components/Footer';
import LinkBar from '../components/LinkBar';
import Marquee from '../components/Marquee';
import Navbar from '../components/Navbar';
import TitleBar from '../components/TitleBar';
import MKG from "../assets/Dr. Makarand Gambhire photo.jpg";
import MT from "../assets/Manisha Tayde.png";
import VG from "../assets/Vaishali Gambhire.jpg";
import YA from "../assets/Yogita Ahire.png";
import KM from "../assets/Kirti Mahale.jpg";


const FacultyB = () => {
    return (
        <div>
            <Navbar />
            <TitleBar text="Faculty (B.Pharm)" />
            <LinkBar />


            <div className="faculty-area-container">
                <div className="main-area">
                    <FacultyCard
                        // pressHandler={() => setShow1(!show1)}
                        image={MKG}
                        name="Name: Dr.Makarand S. Gambhire"
                        designation="Designation: Principal"
                        email="Email: makarandgambhire@gmail.com"
                        qualification="Qualification: M.Pharm Ph.D"
                    />

                    <FacultyCard
                        // pressHandler={() => setShow2(!show2)}
                        image={VG}
                        name="Name: Dr.Vaishali Patil-Gambhire"
                        designation="Designation: Associate Professor"
                        email="Email: vaishaligambhire@gmail.com "
                        qualification="Qualification: M.Pharm Ph.D"
                    />

                    <FacultyCard
                        // pressHandler={() => setShow3(!show3)}
                        image={MT}
                        name="Name: Dr.Manisha Ashwin Tayde "
                        designation="Designation: Associate Professor"
                        email="Email: mtayde82@gmail.com"
                        qualification="Qualification: M.Pharm Ph.D"
                    />

                    <FacultyCard
                        // pressHandler={() => setShow4(!show4)}

                        image={KM}
                        name="Name: Ms. Kirti Dattatraya Mahale"
                        designation="Designation: Assitant Professor"
                        email="Email: kirtimahale23@gmail.com"
                        qualification="Qualification: M.Pharm"
                    />
                    
                    
                    <FacultyCard
                        // pressHandler={() => setShow4(!show4)}

                        image={YA}
                        name="Name: Mrs. Yogita Girish Ahire"
                        designation="Designation: Assitant Professor"
                        email="Email: xyz@gmail.com"
                        qualification="Qualification: M.Pharm"
                    />{" "}
                </div>
            </div>


            <Marquee />
            <Footer />

        </div>
    )
}

export default FacultyB;
