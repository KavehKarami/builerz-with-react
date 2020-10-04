import React from 'react';

const ServiceItem = (props) => {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={props.dataWowDelay || "0"}>
      <div className="service-item">
        <div className="service-img">
          <img src={props.imgURL} alt="service" />
          <div className="service-overlay">
            {props.children}
          </div>
        </div>
        <div className="service-text">
          <h3>{props.title}</h3>
          <a className="btn" href={props.href} data-lightbox="service">+</a>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;