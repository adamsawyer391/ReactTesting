import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import Home from '../home/Home';
import RandomNumber from '../randomnumber/RandomNumber'
import BasicList from '../basiclist/BasicList';
import FormDate from '../formdate/FormDate';
import PassingData from '../passingdata/PassingData';

function Desktop() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/random_number' exact component={RandomNumber} />
                    <Route path='/react/examples/forms-and-dates' exact component={FormDate} />
                    <Route path='/react/examples/simple-list' exact component={BasicList} />
                    {/* <Route path='/react/examples/passing-data"' exact component={PassingData } /> */}
                    <Route path='/react/examples/passing-data' render={(props) => (
                        <PassingData title="We just...." subtitle="passed some data!" />
                    )} />
                </Switch>
            </Router>
        </div>
    )
}

export default Desktop
