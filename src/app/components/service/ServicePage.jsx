import React from 'react';
import ServiceContainer from './ServiceContainer';

const ServicePage = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="section-header text-center">
          <p>Our Services</p>
          <h2>We Provide Services</h2>
        </div>

        <ServiceContainer />
      </div>
    </div>
  );
}

export default ServicePage;