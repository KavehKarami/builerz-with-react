import React from 'react';
import { Link } from "react-router-dom"

const Team = () => {
  return (

    <div className="wrapper">
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
            <a href="/team/#" className="navbar-brand">MENU</a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav mr-auto">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/service" className="nav-item nav-link">Service</Link>
                <Link to="/team" className="nav-item nav-link active">Team</Link>
                <Link to="/portfolio" className="nav-item nav-link">Project</Link>
                <div className="nav-item dropdown">
                  <a href="/team/#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu">
                    <Link to="/blog" className="dropdown-item">Blog Page</Link>
                    <Link to="/single" className="dropdown-item">Single Page</Link>
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">Contact</Link>
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
              <h2>Our Team</h2>
            </div>
            <div className="col-12">
              <a href="/team/#">Home</a>
              <a href="/team/#">Our Team</a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Page Header End --> */}


      {/* <!-- Team Start --> */}
      <div className="team">
        <div className="container">
          <div className="section-header text-center">
            <p>Our Team</p>
            <h2>Meet Our Engineer</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item">
                <div className="team-img">
                  <img src={require("../../assets/img/team-1.jpg")} alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Adam Phillips</h2>
                  <p>CEO & Founder</p>
                </div>
                <div className="team-social">
                  <a className="social-tw" href="/team/#"><i className="fab fa-twitter"></i></a>
                  <a className="social-fb" href="/team/#"><i className="fab fa-facebook-f"></i></a>
                  <a className="social-li" href="/team/#"><i className="fab fa-linkedin-in"></i></a>
                  <a className="social-in" href="/team/#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="team-item">
                <div className="team-img">
                  <img src={require("../../assets/img/team-2.jpg")} alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Dylan Adams</h2>
                  <p>Civil Engineer</p>
                </div>
                <div className="team-social">
                  <a className="social-tw" href="/team/#"><i className="fab fa-twitter"></i></a>
                  <a className="social-fb" href="/team/#"><i className="fab fa-facebook-f"></i></a>
                  <a className="social-li" href="/team/#"><i className="fab fa-linkedin-in"></i></a>
                  <a className="social-in" href="/team/#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <div className="team-img">
                  <img src={require("../../assets/img/team-3.jpg")} alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Jhon Doe</h2>
                  <p>Interior Designer</p>
                </div>
                <div className="team-social">
                  <a className="social-tw" href="/team/#"><i className="fab fa-twitter"></i></a>
                  <a className="social-fb" href="/team/#"><i className="fab fa-facebook-f"></i></a>
                  <a className="social-li" href="/team/#"><i className="fab fa-linkedin-in"></i></a>
                  <a className="social-in" href="/team/#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="team-item">
                <div className="team-img">
                  <img src={require("../../assets/img/team-4.jpg")} alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Josh Dunn</h2>
                  <p>Painter</p>
                </div>
                <div className="team-social">
                  <a className="social-tw" href="/team/#"><i className="fab fa-twitter"></i></a>
                  <a className="social-fb" href="/team/#"><i className="fab fa-facebook-f"></i></a>
                  <a className="social-li" href="/team/#"><i className="fab fa-linkedin-in"></i></a>
                  <a className="social-in" href="/team/#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item">
                <div className="team-img">
                  <img src={require("../../assets/img/team-1.jpg")} alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Adam Phillips</h2>
                  <p>CEO & Founder</p>
                </div>
                <div className="team-social">
                  <a className="social-tw" href="/team/#"><i className="fab fa-twitter"></i></a>
                  <a className="social-fb" href="/team/#"><i className="fab fa-facebook-f"></i></a>
                  <a className="social-li" href="/team/#"><i className="fab fa-linkedin-in"></i></a>
                  <a className="social-in" href="/team/#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="team-item">
                <div className="team-img">
                  <img src={require("../../assets/img/team-2.jpg")} alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Dylan Adams</h2>
                  <p>Civil Engineer</p>
                </div>
                <div className="team-social">
                  <a className="social-tw" href="/team/#"><i className="fab fa-twitter"></i></a>
                  <a className="social-fb" href="/team/#"><i className="fab fa-facebook-f"></i></a>
                  <a className="social-li" href="/team/#"><i className="fab fa-linkedin-in"></i></a>
                  <a className="social-in" href="/team/#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <div className="team-img">
                  <img src={require("../../assets/img/team-3.jpg")} alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Jhon Doe</h2>
                  <p>Interior Designer</p>
                </div>
                <div className="team-social">
                  <a className="social-tw" href="/team/#"><i className="fab fa-twitter"></i></a>
                  <a className="social-fb" href="/team/#"><i className="fab fa-facebook-f"></i></a>
                  <a className="social-li" href="/team/#"><i className="fab fa-linkedin-in"></i></a>
                  <a className="social-in" href="/team/#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="team-item">
                <div className="team-img">
                  <img src={require("../../assets/img/team-4.jpg")} alt="Team" />
                </div>
                <div className="team-text">
                  <h2>Josh Dunn</h2>
                  <p>Painter</p>
                </div>
                <div className="team-social">
                  <a className="social-tw" href="/team/#"><i className="fab fa-twitter"></i></a>
                  <a className="social-fb" href="/team/#"><i className="fab fa-facebook-f"></i></a>
                  <a className="social-li" href="/team/#"><i className="fab fa-linkedin-in"></i></a>
                  <a className="social-in" href="/team/#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}


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
                  <a href="/team/#"><i className="fab fa-twitter"></i></a>
                  <a href="/team/#"><i className="fab fa-facebook-f"></i></a>
                  <a href="/team/#"><i className="fab fa-youtube"></i></a>
                  <a href="/team/#"><i className="fab fa-instagram"></i></a>
                  <a href="/team/#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-link">
                <h2>Services Areas</h2>
                <a href="/team/#">Building Construction</a>
                <a href="/team/#">House Renovation</a>
                <a href="/team/#">Architecture Design</a>
                <a href="/team/#">Interior Design</a>
                <a href="/team/#">Painting</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="footer-link">
                <h2>Useful Pages</h2>
                <a href="/team/#">About Us</a>
                <a href="/team/#">Contact Us</a>
                <a href="/team/#">Our Team</a>
                <a href="/team/#">Projects</a>
                <a href="/team/#">Testimonial</a>
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
            <a href="/team/#">Terms of use</a>
            <a href="/team/#">Privacy policy</a>
            <a href="/team/#">Cookies</a>
            <a href="/team/#">Help</a>
            <a href="/team/#">FQAs</a>
          </div>
        </div>
        <div className="container copyright">
          <div className="row">
            <div className="col-md-6">
              <p>&copy; <a href="/team/#">Your Site Name</a>, All Right Reserved.</p>
            </div>
            <div className="col-md-6">
              <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}

      <a className="back-to-top"><i className="fa fa-chevron-up"></i></a>
    </div>

  );
}

export default Team;