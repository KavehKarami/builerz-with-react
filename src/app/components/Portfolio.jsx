import React from 'react';
import { Link } from "react-router-dom"

const Portfolio = () => {

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
          <a href="/portfolio/#" className="navbar-brand">MENU</a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav mr-auto">
              <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/about" className="nav-item nav-link">About</Link>
              <Link to="/service" className="nav-item nav-link">Service</Link>
              <Link to="/team" className="nav-item nav-link">Team</Link>
              <Link to="/portfolio" className="nav-item nav-link active">Project</Link>
              <div className="nav-item dropdown">
                <a href="/portfolio/#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
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
            <h2>Our Projects</h2>
          </div>
          <div className="col-12">
            <a href="/portfolio/#">Home</a>
            <a href="/portfolio/#">Our Projects</a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Portfolio Start --> */}
    <div className="portfolio">
      <div className="container">
        <div className="section-header text-center">
          <p>Our Projects</p>
          <h2>Visit Our Projects</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active" >All</li>
              <li data-filter=".first">Complete</li>
              <li data-filter=".second">Running</li>
              <li data-filter=".third">Upcoming</li>
            </ul>
          </div>
        </div>
        <div className="row portfolio-container" >
          <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
            <div className="portfolio-warp">
              <div className="portfolio-img">
                <img src={require("../../assets/img/portfolio-1.jpg")} alt="portfolio" />
                <div className="portfolio-overlay">
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                              </p>
                </div>
              </div>
              <div className="portfolio-text">
                <h3>Project Name</h3>
                <a className="btn" href="img/portfolio-1.jpg" data-lightbox="portfolio">+</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp" data-wow-delay="0.2s">
            <div className="portfolio-warp">
              <div className="portfolio-img">
                <img src={require("../../assets/img/portfolio-2.jpg")} alt="portfolio" />
                <div className="portfolio-overlay">
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                              </p>
                </div>
              </div>
              <div className="portfolio-text">
                <h3>Project Name</h3>
                <a className="btn" href="img/portfolio-2.jpg" data-lightbox="portfolio">+</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp" data-wow-delay="0.3s">
            <div className="portfolio-warp">
              <div className="portfolio-img">
                <img src={require("../../assets/img/portfolio-3.jpg")} alt="portfolio" />
                <div className="portfolio-overlay">
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                              </p>
                </div>
              </div>
              <div className="portfolio-text">
                <h3>Project Name</h3>
                <a className="btn" href="img/portfolio-3.jpg" data-lightbox="portfolio">+</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item first wow fadeInUp" data-wow-delay="0.4s">
            <div className="portfolio-warp">
              <div className="portfolio-img">
                <img src={require("../../assets/img/portfolio-4.jpg")} alt="portfolio" />
                <div className="portfolio-overlay">
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                              </p>
                </div>
              </div>
              <div className="portfolio-text">
                <h3>Project Name</h3>
                <a className="btn" href="img/portfolio-4.jpg" data-lightbox="portfolio">+</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
            <div className="portfolio-warp">
              <div className="portfolio-img">
                <img src={require("../../assets/img/portfolio-5.jpg")} alt="portfolio" />
                <div className="portfolio-overlay">
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                              </p>
                </div>
              </div>
              <div className="portfolio-text">
                <h3>Project Name</h3>
                <a className="btn" href="img/portfolio-5.jpg" data-lightbox="portfolio">+</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item third wow fadeInUp" data-wow-delay="0.6s">
            <div className="portfolio-warp">
              <div className="portfolio-img">
                <img src={require("../../assets/img/portfolio-6.jpg")} alt="portfolio" />
                <div className="portfolio-overlay">
                  <p>
                    Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
                              </p>
                </div>
              </div>
              <div className="portfolio-text">
                <h3>Project Name</h3>
                <a className="btn" href="img/portfolio-6.jpg" data-lightbox="portfolio">+</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 load-more">
            <div className="btn">Load More</div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Portfolio End --> */}


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
                <a href="/portfolio/#"><i className="fab fa-twitter"></i></a>
                <a href="/portfolio/#"><i className="fab fa-facebook-f"></i></a>
                <a href="/portfolio/#"><i className="fab fa-youtube"></i></a>
                <a href="/portfolio/#"><i className="fab fa-instagram"></i></a>
                <a href="/portfolio/#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Services Areas</h2>
              <a href="/portfolio/#">Building Construction</a>
              <a href="/portfolio/#">House Renovation</a>
              <a href="/portfolio/#">Architecture Design</a>
              <a href="/portfolio/#">Interior Design</a>
              <a href="/portfolio/#">Painting</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Useful Pages</h2>
              <a href="/portfolio/#">About Us</a>
              <a href="/portfolio/#">Contact Us</a>
              <a href="/portfolio/#">Our Team</a>
              <a href="/portfolio/#">Projects</a>
              <a href="/portfolio/#">Testimonial</a>
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
          <a href="/portfolio/#">Terms of use</a>
          <a href="/portfolio/#">Privacy policy</a>
          <a href="/portfolio/#">Cookies</a>
          <a href="/portfolio/#">Help</a>
          <a href="/portfolio/#">FQAs</a>
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; <a href="/portfolio/#">Your Site Name</a>, All Right Reserved.</p>
          </div>
          <div className="col-md-6">
            <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Footer End --> */}

    <a className="back-to-top"><i className="fa fa-chevron-up"></i></a>
  </div>);
}

export default Portfolio;