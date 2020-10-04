import React from 'react';

const PortfolioItem = (props) => {
  return (
    <div className={`col-lg-4 col-md-6 col-sm-12 portfolio-item ${props.category} wow fadeInUp`} data-wow-delay={props.dataWowDelay || "0"}>
      <div className="portfolio-warp">
        <div className="portfolio-img">
          <img src={props.imgURL} alt="portfolio" />
          <div className="portfolio-overlay">
            {props.children}
          </div>
        </div>
        <div className="portfolio-text">
          <h3>{props.title}</h3>
          <a className="btn" href={props.href} data-lightbox="portfolio">+</a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;