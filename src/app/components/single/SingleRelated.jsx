import React from 'react';

const SingleRelated = (props) => {
  return (
    <div className="single-related wow fadeInUp">
      <h2>Related Post</h2>
      <div className="owl-carousel related-slider">
        {props.children}
      </div>
    </div>
  );
}

export default SingleRelated;