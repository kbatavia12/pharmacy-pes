import React from "react";
import Footer from "../components/Footer";
import LinkBar from "../components/LinkBar";
import Marquee from "../components/Marquee";
import Navbar from "../components/Navbar";
import TitleBar from "../components/TitleBar";
import "./css/Mission.css";

const Mission = () => {
  return (
    <div className="mission-container">
      <Navbar />
      <TitleBar text="Vision and Mission" />

      <LinkBar />

      <div className="mission-area-container">

        <div className="mission-main-area">
          {/* <h2>Vision and Mission</h2> */}
          <p className="bigText">
           Vision
          </p>
          <p>
            To nurture talent into all round excellence by providing an educational experience which is intellectually inspiring and technologically innovative and produce not just professionals but visionaries of tomorrow.
          </p>



          <p className="bigText" >
            Mission
          </p>
          <p>
            1. To draw a fine faculty base so that students can be educated in the most pragmatic and innovative methods drawn from the progressive professional colleges and universities across the globe.
          </p>
          <p>
            2. To give a taste of creativity, innovation, research and the highest standards of professionalism in the students.
          </p>
          <p>3. To educate students with the fundamental knowledge, problem solving skills, business awareness and confidence required to be confident leaders in the global environment.</p>
          <p>4. To contribute to the performance improvement of the corporate world through compatible academic programs, Pharma Development Programs and Pharma Consulting Services.</p>
          
          <p>5. To evoke a deep sense of goodness and beauty, in the young adults, graduating from the pharmacy institute of PES, to enable them to make responsible choices influenced by the institute.</p>
          
          <p>6. To guide budding Pharmacists into learning about the beauty and joy of learning so that they develop a life-long devotion towards learning.</p>

        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Mission;
