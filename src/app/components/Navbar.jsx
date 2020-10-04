import React from 'react';
import { Link, useLocation } from "react-router-dom";
import CustomLink from "./CustomLink"

const Navbar = () => {
  let { pathname } = useLocation();

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
              <CustomLink exact={true} path={"/"} label="Home" />
              <CustomLink exact={true} path={"/about"} label="About" />
              <CustomLink exact={true} path={"/service"} label="Service" />
              <CustomLink exact={true} path={"/team"} label="Team" />
              <CustomLink exact={true} path={"/portfolio"} label="Project" />

              <div className="nav-item dropdown">
                <a href="/" className={(pathname === "/blog" || pathname === "/single") ? "nav-link dropdown-toggle active" : `nav-link dropdown-toggle`} data-toggle="dropdown">Pages</a>
                <div className="dropdown-menu">
                  <Link to="/blog" className="dropdown-item">Blog Page</Link>
                  <Link to="/single" className="dropdown-item">Single Page</Link>
                </div>
              </div>
              <CustomLink exact={true} path={"/contact"} label="Contact" />
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