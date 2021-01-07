import React from 'react'
import LinkBar from '../components/LinkBar'
import Navbar from '../components/Navbar'
import TitleBar from '../components/TitleBar'

const PrincipalDesk = () => {
    return (
        <div className = "principal-desk" >
            <Navbar/>
            <TitleBar text = "From the Principal's Desk" />
      <LinkBar/>

            <div className = "desk-area-container" >
               
                <div className = "main-area">

                </div>
            </div>

        </div>
    )
}

export default PrincipalDesk;
