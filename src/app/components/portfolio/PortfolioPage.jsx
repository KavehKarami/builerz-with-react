import React from 'react';
import PortfolioContainer from './PortfolioContainer';
import PortfolioFilter from './PortfolioFilter';

const PortfolioPage = (props) => {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="section-header text-center">
          <p>Our Projects</p>
          <h2>Visit Our Projects</h2>
        </div>
        <PortfolioFilter />
        <PortfolioContainer />
        {props.children}
      </div>
    </div>
  );
}

export default PortfolioPage;