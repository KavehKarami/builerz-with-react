import React from 'react';

const SidebarWidget = (props) => {
  return (
    <div className="sidebar-widget wow fadeInUp">
      {props.text && <h2 className="widget-title">{props.text}</h2>}
      {props.children}
    </div>
  );
}

export default SidebarWidget;