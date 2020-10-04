import React from 'react';

const PortfolioFilter = () => {
  return (
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
  );
}

export default PortfolioFilter;