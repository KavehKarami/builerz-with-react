import React from 'react';
import PageHeader from "../components/PageHeader";
import LatestBlog from "../components/LatestBlog";

const Blog = () => {
  return (
    <React.Fragment>
      <PageHeader name="Our Blog" />
      <LatestBlog />
    </React.Fragment>
  );
}

export default Blog;