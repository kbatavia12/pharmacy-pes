import React from 'react'
import { Link, useHistory } from 'react-router-dom';

const LinkBar = () => {

    const history = useHistory()

    const changeFaculty = (e) => {
        switch(e.target.value) {
            case 'faculty-b':
                history.push('/faculty-b');
                break;
            case 'faculty-d':
                history.push('/faculty-d');
                break;
            default:
                break;
        }
    }

    return (
        <div className="navigation-container">
            <Link to="/">Home</Link>
            <Link to="/mission">Vision and Mission</Link>
            <Link to="/sif">SIF</Link>
            <a target= "_blank" href = "https://www.vmedulife.com/public/auth/#/login/spesiop-nashik">ERP Login</a>

            <select onChange = {changeFaculty} style = {{margin: '0 1%', background: "#00008B", color: 'white', border: 'none'}} >
                <option value = "#" style = {{color: 'white'}} >
                    Faculty
                </option>
                <option value = "faculty-b" >
                    Faculty (B.Pharm)
                </option>

                <option value = "faculty-d" >
                    Faculty (D.Pharm)
                </option>
            </select>

            {/* <Link to="/faculty-d">Faculty (D.Pharm)</Link> */}
            <Link to="/admission">Admissions</Link>
            <Link to="/academic-calendar">Academics</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default LinkBar;
