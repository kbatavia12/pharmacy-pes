import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/DropdownNav.css";

const DropdownNav = () => {
  return (
    <nav style={styles.navContainer}>
      
      <select className="selector" >
        <option children = {5}/>
      </select>

      <select className="selector">
        <option>A</option>
      </select>
     
      <select className="selector">
        <option>A</option>
      </select>
      
      <select className="selector">
        <option>A</option>
      </select>
     
      <select className="selector">
        <option>A</option>
      </select>
    </nav>
  );
};

const styles = {
  navContainer: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
    paddingLeft: "1%",
    paddingRight: "1%",
    backgroundColor: "#42454A"
  },
};

export default DropdownNav;
