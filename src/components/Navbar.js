import React from "react";
import { useHistory } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './css/Navabar.css';


const Navbar = () => {
  
  const history = useHistory();
  const goto = () => {
    history.push('/code-of-conduct')
  }
  
  return (
    <nav class="navbar navbar-light navbar-collapse .d-none" style = {styles.navbarContainer} >
      <div className = "navbar-brand" href="#" style={styles.logoContainer}>
        <img
          src="https://i.ibb.co/n6fYmzj/PES.png"
          width="25%"
          height="23%"
          alt=""
          style={styles.logo}
        />
        <div style={styles.name}>
          <p style={styles.smallText}>Panchavati Education Society's</p>
          <p style={styles.bigText}>Smt. Narmadaben Popatlal Thakkar</p>
          <p style={styles.bigText}>Institute of Pharmacy</p>
          <p style={styles.mediumText}>
            (Nimani Bus Stand, Panchavati, Nashik - 422003)
          </p>
        </div>
      </div>
      <button className = "go" onClick = {goto} >GO</button>
    </nav>
  );
};

const styles = {
  navbarContainer :{
    // maxWidth: "50%"
  },
  logoContainer: {
    display: "flex",
    maxWidth: "70%"
  },
  logo: {
    // borderRadius: "100%",
    border: "0.005px solid white",
    cursor: "pointer",
  },
  smallText: {
    fontSize: "20px",
    margin: "0px",
    fontWeight: "bold"
  },
  bigText: {
    fontSize: "22px",
    margin: "0px",
    color: "#00008B",
    fontWeight: "600",
  },
  name: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "2%",
    // width: "70%"
  },
  mediumText: {
    fontSize: "16px",
    margin: "0px",
  },
};

export default Navbar;
