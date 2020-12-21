import React from 'react'
import './css/TrusteeCard.css'

const TrusteeCard = ({image, info, name,title}) => {
    return (
        <div className = "trustee-card" >
            <img src = {image} ></img>
            <h3>{name}</h3>
            <h6>{title}</h6>
            <p>{info}</p>
        </div>
    )
}

export default TrusteeCard;
