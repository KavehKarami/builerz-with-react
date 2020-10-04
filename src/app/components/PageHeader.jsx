import React from 'react';

const PageHeader = (props) => {
  return (
    <div className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>{props.name}</h2>
          </div>
          <div className="col-12">
            <a href="/#">Home</a>
            <a href="/#">{props.name}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;