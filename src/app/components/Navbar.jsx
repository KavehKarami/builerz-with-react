import React from 'react';
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <a href="/" className="navbar-brand">MENU</a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav mr-auto">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/about" className="nav-item nav-link active">About</Link>
              <Link to="/service" className="nav-item nav-link">Service</Link>
              <Link to="/team" className="nav-item nav-link">Team</Link>
              <Link to="/portfolio" className="nav-item nav-link">Project</Link>
              <div className="nav-item dropdown">
                <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                <div className="dropdown-menu">
                  <Link to="/blog" className="dropdown-item">Blog Page</Link>
                  <Link to="/single" className="dropdown-item">Single Page</Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <div className="ml-auto">
              <a className="btn" href="/">Get A Quote</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;