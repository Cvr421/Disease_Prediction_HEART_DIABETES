import React from 'react';
// import "./Navigation.css"


const Header = () => {
  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex align-items-center">

        <h5 className="logo me-auto"><span href="#services">Predict Disease using Machine Learning</span></h5>
        <span className='clinical'>Not use for Clinical Purposes</span>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a className="nav-link scrollto" href="#services">Predict Disease</a></li>
            
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* .navbar */}

      </div>
    </header>
  );
};
export default Header;