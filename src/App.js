import React from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Cars from './components/pages/Cars';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';




function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home' exact component=
          {Home}/>
          <Route path='/services' component={Services} />
          <Route path='/cars' component={Cars} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/log-in' component={LogIn} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
