import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home-main-container">
            <h2>
                Herein we attempt to describe and document a variety of React components, techniques, and functions to make a modestly interactive React Web App
            </h2>

            <Link to="/random_number">
                <h4>
                    Try Out a Random Number
                </h4>
            </Link>

            <Link to="/react/examples/forms-and-dates">
                <h4>
                    Learn About Dates
                </h4>
            </Link>

            <Link to="/react/examples/simple-list">
                <h4>
                    See a Simple List
                </h4>
            </Link>

            <Link to="/react/examples/passing-data">
                <h4>
                    Passing Data to A New Component
                </h4>
            </Link>

        </div>
    )
}

export default Home
