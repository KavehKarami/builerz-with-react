import React from 'react';

const VideoContainer = (props) => {
  return (
    <div className="video wow fadeIn" data-wow-delay={props.dataWowDelay || "0"}>
      <div className="container">
        <button type="button" className="btn-play" data-toggle="modal" data-src={props.videoURL} data-target={`#${props.id}`}>
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default VideoContainer;