import React from 'react'
import { Link } from 'react-router-dom';

const LinkBar = () => {
    return (
        <div className="navigation-container">
            <Link to="/">Home</Link>
            <Link to="/admission">Admissions</Link>
            <Link to="/academic-calendar">Academics</Link>
            <Link to="/about">About</Link>
      </div>
    )
}

export default LinkBar;
