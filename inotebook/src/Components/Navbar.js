import React, { useEffect } from 'react'
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  useEffect(()=>{
    console.log(location);
  },[location]);
  return (
    <div className='MyNav'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNotebook</Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>  
        </li>
      </ul>
      <form className = 'd-flex'>
      <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>

      </form>


    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar
