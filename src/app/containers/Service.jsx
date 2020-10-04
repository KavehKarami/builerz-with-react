import React from 'react';
import Faq from '../components/Faq';
import PageHeader from '../components/PageHeader';
import ServicePage from '../components/service/ServicePage';

const Service = () => {
  return (
    <React.Fragment>
      <PageHeader name="Our Services" />
      <ServicePage />
      <Faq />
    </React.Fragment>
  );
}

export default Service;