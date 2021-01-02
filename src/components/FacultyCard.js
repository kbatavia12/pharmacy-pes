import React from "react";
import './css/FacultyCard.css';


const FacultyCard = ({
  image,
  designation,
  qualification,
  email,
  name,
  pressHandler
}) => {
  return (
    <div className="card-container" onClick = {pressHandler} >
      <div className="image-container">
        <img src={image}></img>
      </div>
      <div className="text-container">
        <h5>{name}</h5>
        <p>{designation}</p>
        <p>{qualification}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default FacultyCard;
