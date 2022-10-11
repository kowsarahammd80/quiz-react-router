import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
     
     <div className="navbar-nav">
       
      
        <NavLink className="nav-link active fw-bold ms-5" to='/home'>Home</NavLink>
        <NavLink className="nav-link active fw-bold ms-5" to='/statictics'>Statistics</NavLink>
        <NavLink className="nav-link active fw-bold ms-5" to='/block'>Block</NavLink>
     
       
    </div>
     
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;