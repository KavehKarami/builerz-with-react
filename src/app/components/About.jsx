import React from 'react';
import { Link } from "react-router-dom"

const About = () => {
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
    {/* <!-- Nav Bar End --> */}


    {/* <!-- Page Header Start --> */}
    <div className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>About Us</h2>
          </div>
          <div className="col-12">
            <a href="/about/#">Home</a>
            <a href="/about/#">About Us</a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- About Start --> */}
    <div className="about wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6">
            <div className="about-img" >
              <img src={require("../../assets/img/about.jpg")} alt="about" />
            </div>
          </div>
          <div className="col-lg-7 col-md-6">
            <div className="section-header text-left">
              <p>Welcome to Builderz</p>
              <h2>25 Years Experience</h2>
            </div>
            <div className="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                      </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                      </p>
              <a className="btn" href="/">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- About End --> */}


    {/* <!-- Fact Start --> */}
    <div className="fact">
      <div className="container-fluid">
        <div className="row counters">
          <div className="col-md-6 fact-left wow slideInLeft">
            <div className="row">
              <div className="col-6">
                <div className="fact-icon">
                  <i className="flaticon-worker"></i>
                </div>
                <div className="fact-text">
                  <h2 data-toggle="counter-up">109</h2>
                  <p>Expert Workers</p>
                </div>
              </div>
              <div className="col-6">
                <div className="fact-icon">
                  <i className="flaticon-building"></i>
                </div>
                <div className="fact-text">
                  <h2 data-toggle="counter-up">485</h2>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 fact-right wow slideInRight">
            <div className="row">
              <div className="col-6">
                <div className="fact-icon">
                  <i className="flaticon-address"></i>
                </div>
                <div className="fact-text">
                  <h2 data-toggle="counter-up">789</h2>
                  <p>Completed Projects</p>
                </div>
              </div>
              <div className="col-6">
                <div className="fact-icon">
                  <i className="flaticon-crane"></i>
                </div>
                <div className="fact-text">
                  <h2 data-toggle="counter-up">890</h2>
                  <p>Running Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Fact End --> */}


    {/* <!-- FAQs Start --> */}
    <div className="faqs">
      <div className="container">
        <div className="section-header text-center">
          <p>Frequently Asked Question</p>
          <h2>You May Ask</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div id="accordion-1">
              <div className="card wow fadeInLeft" data-wow-delay="0.1s">
                <div className="card-header">
                  <a className="card-link collapsed" data-toggle="collapse" href="#collapseOne">
                    Lorem ipsum dolor sit amet?
                              </a>
                </div>
                <div id="collapseOne" className="collapse" data-parent="#accordion-1">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                              </div>
                </div>
              </div>
              <div className="card wow fadeInLeft" data-wow-delay="0.2s">
                <div className="card-header">
                  <a className="card-link collapsed" data-toggle="collapse" href="#collapseTwo">
                    Lorem ipsum dolor sit amet?
                              </a>
                </div>
                <div id="collapseTwo" className="collapse" data-parent="#accordion-1">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                              </div>
                </div>
              </div>
              <div className="card wow fadeInLeft" data-wow-delay="0.3s">
                <div className="card-header">
                  <a className="card-link collapsed" data-toggle="collapse" href="#collapseThree">
                    Lorem ipsum dolor sit amet?
                              </a>
                </div>
                <div id="collapseThree" className="collapse" data-parent="#accordion-1">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                              </div>
                </div>
              </div>
              <div className="card wow fadeInLeft" data-wow-delay="0.4s">
                <div className="card-header">
                  <a className="card-link collapsed" data-toggle="collapse" href="#collapseFour">
                    Lorem ipsum dolor sit amet?
                              </a>
                </div>
                <div id="collapseFour" className="collapse" data-parent="#accordion-1">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                              </div>
                </div>
              </div>
              <div className="card wow fadeInLeft" data-wow-delay="0.5s">
                <div className="card-header">
                  <a className="card-link collapsed" data-toggle="collapse" href="#collapseFive">
                    Lorem ipsum dolor sit amet?
                              </a>
                </div>
                <div id="collapseFive" className="collapse" data-parent="#accordion-1">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                              </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div id="accordion-2">
              <div className="card wow fadeInRight" data-wow-delay="0.1s">
                <div className="card-header">
                  <a className="card-link collapsed" data-toggle="collapse" href="#collapseSix">
                    Lorem ipsum dolor sit amet?
                              </a>
                </div>
                <div id="collapseSix" className="collapse" data-parent="#accordion-2">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                              </div>
                </div>
              </div>
              <div className="card wow fadeInRight" data-wow-delay="0.2s">
                <div className="card-header">
                  <a className="card-link collapsed" data-toggle="collapse" href="#collapseSeven">
                    Lorem ipsum dolor sit amet?
                              </a>
                </div>
                <div id="collapseSeven" className="collapse" data-parent="#accordion-2">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                              </div>
                </div>
              </div>
              <div className="card wow fadeInRight" data-wow-delay="0.3s">
                <div className="card-header">
                  <a className="card-link collapsed" data-toggle="collapse" href="#collapseEight">
                    Lorem ipsum dolor sit amet?
                              </a>
                </div>
                <div id="collapseEight" className="collapse" data-parent="#accordion-2">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                              </div>
                </div>
              </div>
              <div className="card wow fadeInRight" data-wow-delay="0.4s">
                <div className="card-header">
                  <a className="card-link collapsed" data-toggle="collapse" href="#collapseNine">
                    Lorem ipsum dolor sit amet?
                              </a>
                </div>
                <div id="collapseNine" className="collapse" data-parent="#accordion-2">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                              </div>
                </div>
              </div>
              <div className="card wow fadeInRight" data-wow-delay="0.5s">
                <div className="card-header">
                  <a className="card-link collapsed" data-toggle="collapse" href="#collapseTen">
                    Lorem ipsum dolor sit amet?
                              </a>
                </div>
                <div id="collapseTen" className="collapse" data-parent="#accordion-2">
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non.
                              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- FAQs End --> */}


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
                <a href="/about/#"><i className="fab fa-twitter"></i></a>
                <a href="/about/#"><i className="fab fa-facebook-f"></i></a>
                <a href="/about/#"><i className="fab fa-youtube"></i></a>
                <a href="/about/#"><i className="fab fa-instagram"></i></a>
                <a href="/about/#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Services Areas</h2>
              <a href="/about/#">Building Construction</a>
              <a href="/about/#">House Renovation</a>
              <a href="/about/#">Architecture Design</a>
              <a href="/about/#">Interior Design</a>
              <a href="/about/#">Painting</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Useful Pages</h2>
              <a href="/about/#">About Us</a>
              <a href="/about/#">Contact Us</a>
              <a href="/about/#">Our Team</a>
              <a href="/about/#">Projects</a>
              <a href="/about/#">Testimonial</a>
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
          <a href="/about/#">Terms of use</a>
          <a href="/about/#">Privacy policy</a>
          <a href="/about/#">Cookies</a>
          <a href="/about/#">Help</a>
          <a href="/about/#">FQAs</a>
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; <a href="/">Your Site Name</a>, All Right Reserved.</p>
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

export default About;