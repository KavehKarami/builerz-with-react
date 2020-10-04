import React from 'react';
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div div className="top-bar" >
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12">
            <div className="logo">
              <Link to="/">
                <h1>Builderz</h1>
              </Link>
            </div>
          </div>
          <div className="col-lg-8 col-md-7 d-none d-lg-block">
            <div className="row">
              <div className="col-4">
                <div className="top-bar-item">
                  <div className="top-bar-icon">
                    <i className="flaticon-calendar"></i>
                  </div>
                  <div className="top-bar-text">
                    <h3>Opening Hour</h3>
                    <p>Mon - Fri, 8:00 - 9:00</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="top-bar-item">
                  <div className="top-bar-icon">
                    <i className="flaticon-call"></i>
                  </div>
                  <div className="top-bar-text">
                    <h3>Call Us</h3>
                    <p>+012 345 6789</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="top-bar-item">
                  <div className="top-bar-icon">
                    <i className="flaticon-send-mail"></i>
                  </div>
                  <div className="top-bar-text">
                    <h3>Email Us</h3>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default TopBar;