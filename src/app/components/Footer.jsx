import React from 'react';

const Footer = () => {
  return (
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
  );
}

export default Footer;