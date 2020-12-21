import React from 'react'
import Navbar from '../components/Navbar'
import TitleBar from '../components/TitleBar'

const PrincipalDesk = () => {
    return (
        <div className = "principal-desk" >
            <Navbar/>
            <TitleBar text = "From the Principal's Desk" />
            <div className = "desk-area-container" >
                <div className = "sidebar">

                </div>
                <div className = "main-area">

                </div>
            </div>

        </div>
    )
}

export default PrincipalDesk;
