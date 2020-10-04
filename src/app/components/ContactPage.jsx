import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactPage = () => {
  return (

    <div className="contact wow fadeInUp">
      <div className="container">
        <div className="section-header text-center">
          <p>Get In Touch</p>
          <h2>For Any Query</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ContactInfo />
          </div>
          <div className="col-md-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>

  );
}

export default ContactPage;