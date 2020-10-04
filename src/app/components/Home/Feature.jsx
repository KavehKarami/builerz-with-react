import React from 'react';

const Feature = (props) => {
  return (
    <div className="feature wow fadeInUp" data-wow-delay="0.1s">
      <div className="container-fluid">
        <div className="row align-items-center">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Feature;