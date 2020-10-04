import React from 'react';

const BlogItem = (props) => {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={props.dataWowDelay || "0"}>
      <div className="blog-item">
        <div className="blog-img">
          <img src={props.imgURL} alt="blog" />
        </div>
        <div className="blog-title">
          <h3>{props.title}</h3>
          <a className="btn" href="/blog/#">+</a>
        </div>
        <div className="blog-meta">
          <p>By<a href="/blog/#">{props.creator}</a></p>
          <p>In<a href="/blog/#">{props.department}</a></p>
        </div>
        <div className="blog-text">
          <p>
            {props.children}
          </p>
        </div>
      </div>
    </div>

  );
}

export default BlogItem;