import React from 'react';

const TabNav = () => {
  return (
    <ul className="nav nav-pills nav-justified">
      <li className="nav-item">
        <a className="nav-link active" data-toggle="pill" href="#featured">Featured</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="pill" href="#popular">Popular</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-toggle="pill" href="#latest">Latest</a>
      </li>
    </ul>
  );
}

export default TabNav;