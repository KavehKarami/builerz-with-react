import React from 'react';
import TestimonialSlider from './TestimonialSlider';
import TestimonialSliderItem from './TestimonialSliderItem';
import TestimonialTextItem from './TestimonialTextItem';

const Testimonial = (props) => {
  return (
    <div className="testimonial wow fadeIn" data-wow-delay={props.dataWowDelay || "0"}>
      <div className="container">
        <TestimonialSlider mode="testimonial-slider-nav">
          <TestimonialSliderItem imgURL={require("../../../../assets/img/testimonial-1.jpg")} />
          <TestimonialSliderItem imgURL={require("../../../../assets/img/testimonial-2.jpg")} />
          <TestimonialSliderItem imgURL={require("../../../../assets/img/testimonial-3.jpg")} />
          <TestimonialSliderItem imgURL={require("../../../../assets/img/testimonial-4.jpg")} />
          <TestimonialSliderItem imgURL={require("../../../../assets/img/testimonial-1.jpg")} />
          <TestimonialSliderItem imgURL={require("../../../../assets/img/testimonial-2.jpg")} />
          <TestimonialSliderItem imgURL={require("../../../../assets/img/testimonial-3.jpg")} />
          <TestimonialSliderItem imgURL={require("../../../../assets/img/testimonial-4.jpg")} />
        </TestimonialSlider>

        <TestimonialSlider mode="testimonial-slider">
          <TestimonialTextItem name="Customer Name" qualification="profession" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus." />
          <TestimonialTextItem name="Customer Name" qualification="profession" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus." />
          <TestimonialTextItem name="Customer Name" qualification="profession" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus." />
          <TestimonialTextItem name="Customer Name" qualification="profession" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus." />
          <TestimonialTextItem name="Customer Name" qualification="profession" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus." />
          <TestimonialTextItem name="Customer Name" qualification="profession" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus." />
          <TestimonialTextItem name="Customer Name" qualification="profession" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus." />
          <TestimonialTextItem name="Customer Name" qualification="profession" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus." />
        </TestimonialSlider>
      </div>
    </div>
  );
}

export default Testimonial;