import React from 'react'
import './css/Sidebar.css';

const Sidebar = ({children}) => {
    
    return (
        <div className = "sidebar-container" >
            {children}
        </div>
    )
}

export default Sidebar;
