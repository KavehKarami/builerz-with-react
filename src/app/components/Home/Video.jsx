import React from 'react';
import VideoContainer from './VideoContainer';
import VideoModal from './VideoModal';

const Video = (props) => {
  return (
    <React.Fragment>
      <VideoContainer dataWowDelay={props.dataWowDelay} videoURL={props.videoURL} id={props.id} />
      <VideoModal videoURL={props.videoURL} id={props.id} />
    </React.Fragment>
  );
}

export default Video;