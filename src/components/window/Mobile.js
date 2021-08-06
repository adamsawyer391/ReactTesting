import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

function Mobile() {
    return (
        <div>
            <Router>
                <Navbar />
                <h1>This is the Mobile version</h1>
            </Router>
        </div>
    )
}

export default Mobile
