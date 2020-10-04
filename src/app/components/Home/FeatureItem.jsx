import React from 'react';

const FeatureItem = (props) => {
  return (
    <div className="col-lg-4 col-md-12">
      <div className="feature-item">
        <div className="feature-icon">
          <i className={props.icon}></i>
        </div>
        <div className="feature-text">
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );

}

export default FeatureItem;