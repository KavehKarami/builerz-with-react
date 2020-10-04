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
          <p>{props.comment}</p>
          <a className={props.children ? "btn mb-4" : "btn"} href="/single/#">Reply</a>
          {props.children && (
            <ul className="p-0 list-style-none">
              {props.children}
            </ul>
          )}
        </div>
      </div>
    </li>

  );
}

export default CommentItem;