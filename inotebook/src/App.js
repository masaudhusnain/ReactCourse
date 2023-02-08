import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Homealone from './Components/Homealone';
import About from './Components/About';

import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';


function App() {
  return (
    <>
    
      <Router>
        <Navbar />
        <Alert/>
        <Login/>
        
          <Routes>
            <Route exact path="/home" element={<Homealone />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />

          </Routes>
          
      </Router>
     
    </>
  );
  
}
export default App;
