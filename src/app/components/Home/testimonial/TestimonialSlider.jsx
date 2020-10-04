import React from 'react';

const TestimonialSlider = (props) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className={props.mode}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default TestimonialSlider;