import React from 'react';
import PageHeader from '../components/PageHeader';
import Form from '../components/shared/Form';
import Input from '../components/shared/Input';
import Textarea from '../components/shared/Textarea';
import CommentItem from '../components/single/CommentItem';
import PostItem from '../components/single/PostItem';
import SingleBio from '../components/single/SingleBio';
import SingleComment from '../components/single/SingleComment';
import SingleContent from '../components/single/SingleContent';
import SingleRelated from '../components/single/SingleRelated';
import SingleSidebar from '../components/single/SingleSidebar';
import SingleTags from '../components/single/SingleTags';

const Single = () => {
  return (
    <React.Fragment>
      <PageHeader name="Single Page" />

      <div className="single">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <SingleContent imgURL={require("../../assets/img/single.jpg")} />

              <SingleTags />

              <SingleBio imgURL={require("../../assets/img/user.jpg")} author="Author Name" >
                <p>
                  Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.
                </p>
              </SingleBio>

              <SingleRelated>
                <PostItem imgURL={require("../../assets/img/post-1.jpg")} author="Admin" department="Design" linkText="Lorem ipsum dolor sit amet consec adipis elit" />
                <PostItem imgURL={require("../../assets/img/post-2.jpg")} author="Admin" department="Design" linkText="Lorem ipsum dolor sit amet consec adipis elit" />
                <PostItem imgURL={require("../../assets/img/post-3.jpg")} author="Admin" department="Design" linkText="Lorem ipsum dolor sit amet consec adipis elit" />
                <PostItem imgURL={require("../../assets/img/post-4.jpg")} author="Admin" department="Design" linkText="Lorem ipsum dolor sit amet consec adipis elit" />
              </SingleRelated>

              <SingleComment>
                <CommentItem imgURL={require("../../assets/img/user.jpg")} person="Josh Dunn" when="01 Jan 2045 at 12:00pm" comment="Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst." />
                <CommentItem imgURL={require("../../assets/img/user.jpg")} person="Josh Dunn" when="01 Jan 2045 at 12:00pm" comment="Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst.">
                  <CommentItem imgURL={require("../../assets/img/user.jpg")} person="Josh Dunn" when="01 Jan 2045 at 12:00pm" comment="Lorem ipsum dolor sit amet elit. Integer lorem augue purus mollis sapien, non eros leo in nunc. Donec a nulla vel turpis tempor ac vel justo. In hac platea dictumst." />
                </CommentItem>
              </SingleComment>

              <div className="comment-form wow fadeInUp">
                <h2>Leave a comment</h2>
                <Form btnText="Post Comment">
                  <Input id="name" isLabel={true} labelFor="name" labelText="Name *" />
                  <Input type="email" id="email" isLabel={true} labelFor="email" labelText="Email *" />
                  <Input type="url" id="website" isLabel={true} labelFor="website" labelText="Website" />
                  <Textarea cols="30" rows="5" id="message" isLabel={true} labelFor="website" labelText="Message *" />
                </Form>
              </div>
            </div>

            <div className="col-lg-4">
              <SingleSidebar />
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Single;