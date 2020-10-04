import React from 'react';

const SingleBio = (props) => {
  return (
    <div className="single-bio wow fadeInUp">
      <div className="single-bio-img">
        <img src={props.imgURL} alt="user" />
      </div>
      <div className="single-bio-text">
        <h3>{props.author}</h3>
        {props.children}
      </div>
    </div>
  );
}

export default SingleBio;