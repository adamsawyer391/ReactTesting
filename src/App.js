
import './App.css';
import React, { useState, useEffect } from 'react';
import Desktop from './components/window/Desktop';
import Mobile from './components/window/Mobile';

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
    </div>
  );
}

export default App;
