import React from 'react'
import './css/SidebarLink.css'

const SidebarLink = ({text, active,id, pressHandler}) => {

    return (
        <div className = "sidebar-link-container" style = {{backgroundColor: active ? "#00008b" : "#f3f3f3", color: active ? "white" : "black"}} >
            <p>Link text</p>
        </div>
    )
}

export default SidebarLink;
