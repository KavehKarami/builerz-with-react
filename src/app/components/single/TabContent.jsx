import React from 'react';
import FeaturedPost from './FeaturedPost';
import LastestPost from './LastestPost';
import PopularPost from './PopularPost';

const TabContent = () => {
  return (
    <div className="tab-content">
      <div id="featured" className="container tab-pane active">
        <FeaturedPost />
      </div>
      <div id="popular" className="container tab-pane fade">
        <PopularPost />
      </div>
      <div id="latest" className="container tab-pane fade">
        <LastestPost />
      </div>
    </div>
  );
}

export default TabContent;