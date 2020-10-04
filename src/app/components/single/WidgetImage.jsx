import React from 'react';

const WidgetImage = (props) => {
  return (
    <div className="image-widget">
      <a href="/single/#"><img src={props.imgURL} alt="blog" /></a>
    </div>
  );
}

export default WidgetImage;