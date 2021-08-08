import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Home from '../home/Home';
import RandomNumber from '../randomnumber/RandomNumber'
import BasicList from '../basiclist/BasicList';
import FormDate from '../formdate/FormDate';
import PassingData from '../passingdata/PassingData';
import ComputerScience from '../subjects/ComputerScience';
import Android from '../subjects/Android';
import ReactSubject from '../subjects/ReactSubject';
import './Desktop.css'
import Sidebar from '../sidebar/Sidebar';
import Stackoverflow from '../stackoverflow/Stackoverflow';

function Desktop() {
    return (
        <div>
            <Router>
                <Navbar />
                <div className="div-desktop-main">
                    <Sidebar />
                    <div className="desktop-content-area-display">
                    <Switch className="switch-container">

                        <Route path='/' exact component={Home}/>

                        {/* //SUBJECTS */}
                        <Route path='/subjects/computer_science' exact component={ComputerScience} />
                        <Route path='/subjects/android' exact component={Android} />
                        <Route path='/subjects/react' exact component={ReactSubject} />

                        {/* BASIC REACT //EXAMPLES */}
                        <Route path='/random_number' exact component={RandomNumber} />
                        <Route path='/react/examples/forms-and-dates' exact component={FormDate} />
                        <Route path='/react/examples/simple-list' exact component={BasicList} />
                        <Route path='/react/examples/passing-data' render={(props) => (
                            <PassingData title="We just...." subtitle="passed some data!" />
                        )} />

                        {/* UI CLONE EXAMPLES */}
                        {/* <Route path='/react/ui-clones/ny-times-frontpage' exact component={NewYorkTimesClone} /> */}
                        <Route path='/react/ui-clones/stack-overflow-answer-example' exact component={Stackoverflow} />

                    </Switch>
                    </div>
                    
                </div>
            </Router>
        </div>
    )
}

export default Desktop
