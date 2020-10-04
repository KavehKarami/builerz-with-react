import React from 'react';

const TestimonialSliderItem = (props) => {
  return (
    <div className="slider-nav">
      <img src={props.imgURL} alt="Testimonial" />
    </div>
  );
}

export default TestimonialSliderItem;