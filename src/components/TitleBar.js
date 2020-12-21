import React from 'react'
import './css/Titlebar.css';


const TitleBar = ({text}) => {
    return (
        <div className="title-bar">
        <h1>{text}</h1>
      </div>
    )
}

export default TitleBar;
