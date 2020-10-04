import React from 'react';
import PostItem from './PostItem';

const LastestPost = () => {
  return (
    <React.Fragment>
      <PostItem imgURL={require("../../../assets/img/post-1.jpg")} author="Admin" department="Design" linkText="Lorem ipsum dolor sit amet consec adipis elit" />
      <PostItem imgURL={require("../../../assets/img/post-2.jpg")} author="Admin" department="Design" linkText="Lorem ipsum dolor sit amet consec adipis elit" />
      <PostItem imgURL={require("../../../assets/img/post-3.jpg")} author="Admin" department="Design" linkText="Lorem ipsum dolor sit amet consec adipis elit" />
      <PostItem imgURL={require("../../../assets/img/post-4.jpg")} author="Admin" department="Design" linkText="Lorem ipsum dolor sit amet consec adipis elit" />
      <PostItem imgURL={require("../../../assets/img/post-5.jpg")} author="Admin" department="Design" linkText="Lorem ipsum dolor sit amet consec adipis elit" />

    </React.Fragment>
  );
}

export default LastestPost;