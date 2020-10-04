import React from 'react';

const TestimonialTextItem = (props) => {
  return (
    <div className="slider-item">
      <h3>{props.name}</h3>
      <h4>{props.qualification}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default TestimonialTextItem;