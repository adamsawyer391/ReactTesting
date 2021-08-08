import React from 'react'
import AndroidExpander from '../navbar/expandersections/AndroidExpander';
import ReactExapnder from '../navbar/expandersections/ReactExpander';
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar-container">
            <ReactExapnder />
            <AndroidExpander />
        </div>
    )
}

export default Sidebar
