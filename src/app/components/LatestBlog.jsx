import React from 'react';
import BlogPage from "./BlogPage"
import BlogPagination from "./BlogPagination"

const LatestBlog = () => {
  return (
    <React.Fragment>
      <div className="blog">
        <div className="container">
          <div className="section-header text-center">
            <p>Latest Blog</p>
            <h2>Latest From Our Blog</h2>
          </div>
          <BlogPage />
          <BlogPagination />
        </div>
      </div>
    </React.Fragment>
  );
}

export default LatestBlog;