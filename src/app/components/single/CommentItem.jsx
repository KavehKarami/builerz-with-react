import React from 'react';

const CommentItem = (props) => {
  return (
    <li className="comment-item">
      <div className="comment-body">
        <div className="comment-img">
          <img src={props.imgURL} alt="user" />
        </div>
        <div className="comment-text">
          <h3><a href="/single/#">{props.person}</a></h3>
          <span>{props.time}</span>
          {props.children}
          <a className="btn" href="/single/#">Reply</a>
        </div>
      </div>
    </li>

  );
}

export default CommentItem;