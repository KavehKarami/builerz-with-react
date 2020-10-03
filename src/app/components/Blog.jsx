import React from 'react';
import { Link } from "react-router-dom"

const Blog = () => {
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
          <a href="/blog/#" className="navbar-brand">MENU</a>
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
                <a href="/blog/#" className="nav-link dropdown-toggle active" data-toggle="dropdown">Pages</a>
                <div className="dropdown-menu">
                  <Link to="/blog" className="dropdown-item">Blog Page</Link>
                  <Link to="/single" className="dropdown-item">Single Page</Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <div className="ml-auto">
              <a className="btn" href="/blog/#">Get A Quote</a>
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
            <h2>Our Blog</h2>
          </div>
          <div className="col-12">
            <a href="/blog/#">Home</a>
            <a href="/blog/#">Our Blog</a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Blog Start --> */}
    <div className="blog">
      <div className="container">
        <div className="section-header text-center">
          <p>Latest Blog</p>
          <h2>Latest From Our Blog</h2>
        </div>
        <div className="row blog-page">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="blog-item">
              <div className="blog-img">
                <img src={require("../../assets/img/blog-1.jpg")} alt="blog" />
              </div>
              <div className="blog-title">
                <h3>Lorem ipsum dolor sit</h3>
                <a className="btn" href="/blog/#">+</a>
              </div>
              <div className="blog-meta">
                <p>By<a href="/blog/#">Admin</a></p>
                <p>In<a href="/blog/#">Construction</a></p>
              </div>
              <div className="blog-text">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                          </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp">
            <div className="blog-item">
              <div className="blog-img">
                <img src={require("../../assets/img/blog-2.jpg")} alt="blog" />
              </div>
              <div className="blog-title">
                <h3>Lorem ipsum dolor sit</h3>
                <a className="btn" href="/blog/#">+</a>
              </div>
              <div className="blog-meta">
                <p>By<a href="/blog/#">Admin</a></p>
                <p>In<a href="/blog/#">Construction</a></p>
              </div>
              <div className="blog-text">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                          </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="blog-item">
              <div className="blog-img">
                <img src={require("../../assets/img/blog-3.jpg")} alt="blog" />
              </div>
              <div className="blog-title">
                <h3>Lorem ipsum dolor sit</h3>
                <a className="btn" href="/blog/#">+</a>
              </div>
              <div className="blog-meta">
                <p>By<a href="/blog/#">Admin</a></p>
                <p>In<a href="/blog/#">Construction</a></p>
              </div>
              <div className="blog-text">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                          </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="blog-item">
              <div className="blog-img">
                <img src={require("../../assets/img/blog-1.jpg")} alt="blog" />
              </div>
              <div className="blog-title">
                <h3>Lorem ipsum dolor sit</h3>
                <a className="btn" href="/blog/#">+</a>
              </div>
              <div className="blog-meta">
                <p>By<a href="/blog/#">Admin</a></p>
                <p>In<a href="/blog/#">Construction</a></p>
              </div>
              <div className="blog-text">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                          </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp">
            <div className="blog-item">
              <div className="blog-img">
                <img src={require("../../assets/img/blog-2.jpg")} alt="blog" />
              </div>
              <div className="blog-title">
                <h3>Lorem ipsum dolor sit</h3>
                <a className="btn" href="/blog/#">+</a>
              </div>
              <div className="blog-meta">
                <p>By<a href="/blog/#">Admin</a></p>
                <p>In<a href="/blog/#">Construction</a></p>
              </div>
              <div className="blog-text">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                          </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="blog-item">
              <div className="blog-img">
                <img src={require("../../assets/img/blog-3.jpg")} alt="blog" />
              </div>
              <div className="blog-title">
                <h3>Lorem ipsum dolor sit</h3>
                <a className="btn" href="/blog/#">+</a>
              </div>
              <div className="blog-meta">
                <p>By<a href="/blog/#">Admin</a></p>
                <p>In<a href="/blog/#">Construction</a></p>
              </div>
              <div className="blog-text">
                <p>
                  Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
                          </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled"><a className="page-link" href="/blog/#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="/blog/#">1</a></li>
              <li className="page-item active"><a className="page-link" href="/blog/#">2</a></li>
              <li className="page-item"><a className="page-link" href="/blog/#">3</a></li>
              <li className="page-item"><a className="page-link" href="/blog/#">Next</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Blog End --> */}


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
                <a href="/blog/#"><i className="fab fa-twitter"></i></a>
                <a href="/blog/#"><i className="fab fa-facebook-f"></i></a>
                <a href="/blog/#"><i className="fab fa-youtube"></i></a>
                <a href="/blog/#"><i className="fab fa-instagram"></i></a>
                <a href="/blog/#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Services Areas</h2>
              <a href="/blog/#">Building Construction</a>
              <a href="/blog/#">House Renovation</a>
              <a href="/blog/#">Architecture Design</a>
              <a href="/blog/#">Interior Design</a>
              <a href="/blog/#">Painting</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="footer-link">
              <h2>Useful Pages</h2>
              <a href="/blog/#">About Us</a>
              <a href="/blog/#">Contact Us</a>
              <a href="/blog/#">Our Team</a>
              <a href="/blog/#">Projects</a>
              <a href="/blog/#">Testimonial</a>
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
          <a href="/blog/#">Terms of use</a>
          <a href="/blog/#">Privacy policy</a>
          <a href="/blog/#">Cookies</a>
          <a href="/blog/#">Help</a>
          <a href="/blog/#">FQAs</a>
        </div>
      </div>
      <div className="container copyright">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; <a href="/blog/#">Your Site Name</a>, All Right Reserved.</p>
          </div>
          <div className="col-md-6">
            <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- Footer End --> */}

    <a href="/blog/#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
  </div>
  );
}

export default Blog;