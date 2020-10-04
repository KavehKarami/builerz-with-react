import React from 'react';

const BlogPagination = () => {
  return (
    <div className="row">
      <div className="col-12">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled"><a className="page-link" href="/blog/#">Previous</a></li>
          <li className="page-item"><a className="page-link" href="/blog/#">1</a></li>
          <li className="page-item active"><a className="page-link" href="/blog/#">2</a></li>
          <li className="page-item"><a className="page-link" href="/blog/#">3</a></li>
          <li className="page-item"><a className="page-link" href="/blog/#">Next</a></li>
        </ul>
      </div>
    </div>
  );
}

export default BlogPagination;