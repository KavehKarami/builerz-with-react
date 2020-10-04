import React from 'react';

const CarouselItem = (props) => {
  return (
    <div className={`carousel-item ${props.className}`}>
      <img src={props.imgURL} alt="Carousel" />
      <div className="carousel-caption">
        <p className="animated fadeInRight">{props.text}</p>
        <h1 className="animated fadeInLeft">{props.title}</h1>
        <a className="btn animated fadeInUp" href={props.href}>{props.linkText}</a>
      </div>
    </div>
  );
}

export default CarouselItem;