import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './css/Navabar.css';
import LOGO from '../assets/mainLogo.png';
import PES from '../assets/PES.png';


const Navbar = () => {

  return (
    <nav class="navbar navbar-light navbar-collapse .d-none navbar-custom" style = {styles.navbarContainer} >
      <div className = "navbar-brand" href="#" style={styles.logoContainer}>
        <img
          src={PES}
          width = "20%"
          height = "20%"
          alt=""
          style={styles.logo}
        />
        <div style={styles.name}>
          <p style={styles.smallText}>Panchavati Education Societys</p>
          <p style={styles.bigText}>Institute of Pharmacy</p>
          <p style={styles.mediumText}>
            (Near Nimani Bus Stand, Panchavati, Nashik - 422003)
          </p>
        </div>
        <img
          src={LOGO}
          width = "15%"
          height = "15%"
          alt=""
          style={styles.logo}
        />
      </div>
    </nav>
  );
};

const styles = {
  navbarContainer :{
    // maxWidth: "50%"
    backgroundColor: "#f3f3f3"
  },
  logoContainer: {
    display: "flex",

  },
  logo: {
    // borderRadius: "100%",
    // border: "0.005px solid white",
    cursor: "pointer",
  },
  smallText: {
    fontSize: "32px",
    margin: "0px",
    fontWeight: "bold"
  },
  bigText: {
    fontSize: "40px",
    margin: "0px",
    color: "#00008B",
    fontWeight: "600", 
    
  },
  name: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    // paddingLeft: "2%",
    // width: "70%"
  },
  mediumText: {
    fontSize: "24px",
    margin: "0px",
  },
};

export default Navbar;
