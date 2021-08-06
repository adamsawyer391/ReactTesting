
import './App.css';
import React, { useState, useEffect } from 'react';
import Desktop from './components/window/Desktop';
import Mobile from './components/window/Mobile';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Navbar from './components/navbar/Navbar';
// import Home from './components/home/Home';
// import RandomNumber from './components/randomnumber/RandomNumber'
// import BasicList from './components/basiclist/BasicList';
// import FormDate from './components/formdate/FormDate';

const App = () => {

  const[isDesktop, setDesktop] = useState(window.innerWidth > 1200);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1200);
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => {
      window.removeEventListener("resize", updateMedia);
    }
  }, []);

  return (
    <div className="App">
      {isDesktop ? (
        <div>
          <Desktop />
        </div>
      ) : (
        <div>
          <Mobile />
        </div>
      )}
      {/* <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/random_number' exact component={RandomNumber} />
          <Route path='/react/examples/forms-and-dates' exact component={FormDate} />
          <Route path='/react/examples/simple-list' exact component={BasicList} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
