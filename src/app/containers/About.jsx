import React from 'react';
import PageHeader from "../components/PageHeader";
import AboutCompany from "../components/AboutCompany";
import Fact from "../components/Fact";
import Faq from "../components/Faq";

const About = () => {
  return (
    <React.Fragment>
      <PageHeader name="About us" />
      <AboutCompany />
      <Fact />
      <Faq />
    </React.Fragment>
  );
}

export default About;