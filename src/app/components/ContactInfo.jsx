import React from 'react';

const ContactInfo = () => {
  return (
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
  );
}

export default ContactInfo;