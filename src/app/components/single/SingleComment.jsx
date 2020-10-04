import React from 'react';

const SingleComment = (props) => {
  return (
    <div className="single-comment wow fadeInUp">
      <h2>3 Comments</h2>
      <ul className="comment-list">
        {props.children}
      </ul>
    </div>
  );
}

export default SingleComment;