import React from 'react';
import ContactPage from '../components/ContactPage';
import PageHeader from "../components/PageHeader";

const Contact = () => {
  return (
    <React.Fragment>
      <PageHeader name="Contact Us" />
      <ContactPage />
    </React.Fragment>
  );
}

export default Contact;