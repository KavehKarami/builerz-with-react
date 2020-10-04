import React from 'react';

const PostItem = (props) => {
  return (
    <div className="post-item">
      <div className="post-img">
        <img src={props.imgURL} alt="post" />
      </div>
      <div className="post-text">
        <a href="/single/#">{props.linkText}</a>
        <div className="post-meta">
          <p>By<a href="/single/#">{props.author}</a></p>
          <p>In<a href="/single/#">{props.department}</a></p>
        </div>
      </div>
    </div>
  );
}

export default PostItem;