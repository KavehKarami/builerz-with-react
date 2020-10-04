import React from 'react';
import { Link } from "react-router-dom"

const Contact = () => {
  return (<div className="wrapper">
    {/* <!-- Top Bar Start --> */}
    <div className="top-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12">
            <div className="logo">
              <Link to="/">
                <h1>Builderz</h1>
                {/* <!-- <img src="img/logo.jpg" alt="Logo"> --> */}
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
    </div>
    {/* <!-- Top Bar End --> */}

    {/* <!-- Nav Bar Start --> */}
    <div className="nav-bar">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <a href="/contact/#" className="navbar-brand">MENU</a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav mr-auto">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/about" className="nav-item nav-link">About</Link>
              <Link to="/service" className="nav-item nav-link">Service</Link>
              <Link to="/team" className="nav-item nav-link">Team</Link>
              <Link to="/portfolio" className="nav-item nav-link">Project</Link>
              <div className="nav-item dropdown">
                <a href="/contact/#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                <div className="dropdown-menu">
                  <Link to="/blog" className="dropdown-item">Blog Page</Link>
                  <Link to="/single" className="dropdown-item">Single Page</Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link active">Contact</Link>
            </div>
            <div className="ml-auto">
              <div className="btn">Get A Quote</div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    {/* <!-- Nav Bar End --> */}


    {/* <!-- Page Header Start --> */}
    <div className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Contact Us</h2>
          </div>
          <div className="col-12">
            <a href="/contact/#">Home</a>
            <a href="/contact/#">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Contact Start --> */}
    <div className="contact wow fadeInUp">
      <div className="container">
        <div className="section-header text-center">
          <p>Get In Touch</p>
          <h2>For Any Query</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <div className="contact-item">
                <i className="flaticon-address"></i>
                <div className="contact-text">
                  <h2>Location</h2>
                  <p>123 Street, New York, USA</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="flaticon-call"></i>
                <div className="contact-text">
                  <h2>Phone</h2>
                  <p>+012 345 67890</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="flaticon-send-mail"></i>
                <div className="contact-text">
                  <h2>Email</h2>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form">
              <div id="success"></div>
              <form name="sentMessage" id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input type="text" className="form-control" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea className="form-control" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button className="btn" type="submit" id="sendMessageButton">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Contact End --> */}


    {/* <!-- Footer Start --> */}
    <div className="footer wow fadeIn" data-wow-delay="0.3s">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="footer-contact">
              <h2>Office Contact</h2>
              <p><i className="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
              <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
              <p><i className="fa fa-envelope"></i>info@example.com</p>
              <div className="footer-social">
                <a href="/contact/#"><i className="fab fa-twitter"></i></a>
                <a href="/contact/#"><i className="fab fa-facebook-f"></i></a>
                <a href="/contact/#"><i className="fab fa-youtube"></i></a>
                <a href="/contact/#"><i className="fab fa-instagram"></i></a>
                <a href="/contact/#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Services Areas</h2>
              <a href="/contact/#">Building Construction</a>
              <a href="/contact/#">House Renovation</a>
              <a href="/contact/#">Architecture Design</a>
              <a href="/contact/#">Interior Design</a>
              <a href="/contact/#">Painting</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Useful Pages</h2>
              <a href="/contact/#">About Us</a>
              <a href="/contact/#">Contact Us</a>
              <a href="/contact/#">Our Team</a>
              <a href="/contact/#">Projects</a>
              <a href="/contact/#">Testimonial</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="newsletter">
              <h2>Newsletter</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu
                      </p>
              <div className="form">
                <input className="form-control" placeholder="Email here" />
                <button className="btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-menu">
        <div className="f-menu">
          <a href="/contact/#">Terms of use</a>
          <a href="/contact/#">Privacy policy</a>
          <a href="/contact/#">Cookies</a>
          <a href="/contact/#">Help</a>
          <a href="/contact/#">FQAs</a>
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; <a href="/contact/#">Your Site Name</a>, All Right Reserved.</p>
          </div>
          <div className="col-md-6">
            <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Footer End --> */}
  </div>);
}

export default Contact;