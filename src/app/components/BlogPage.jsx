import React from 'react';
import BlogItem from "./BlogItem"

const BlogPage = () => {
  return (
    <div className="row blog-page">
      <BlogItem dataWowDelay="0.2s" imgURL={require("../../assets/img/blog-1.jpg")} title="Lorem ipsum dolor sit" creator="Kaveh Karami" department="Construction" >
        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
      </BlogItem>
      <BlogItem imgURL={require("../../assets/img/blog-2.jpg")} title="Lorem ipsum dolor sit" creator="Kaveh Karami" department="Construction" >
        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
      </BlogItem>
      <BlogItem dataWowDelay="0.2s" imgURL={require("../../assets/img/blog-3.jpg")} title="Lorem ipsum dolor sit" creator="Kaveh Karami" department="Construction" >
        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
      </BlogItem>
      <BlogItem dataWowDelay="0.2s" imgURL={require("../../assets/img/blog-1.jpg")} title="Lorem ipsum dolor sit" creator="Kaveh Karami" department="Construction" >
        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
      </BlogItem>
      <BlogItem imgURL={require("../../assets/img/blog-2.jpg")} title="Lorem ipsum dolor sit" creator="Kaveh Karami" department="Construction" >
        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
      </BlogItem>
      <BlogItem dataWowDelay="0.2s" imgURL={require("../../assets/img/blog-3.jpg")} title="Lorem ipsum dolor sit" creator="Kaveh Karami" department="Construction" >
        Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor
      </BlogItem>
    </div>
  );
}

export default BlogPage;