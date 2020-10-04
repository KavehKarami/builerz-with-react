import React from 'react';

const AccordionItem = (props) => {
  return (
    <div className="card wow fadeInLeft" data-wow-delay={props.dataWowDelay || "0"}>
      <div className="card-header">
        <a className="card-link collapsed" data-toggle="collapse" href={`#${props.uniqueId}`}>
          {props.title}
        </a>
      </div>

      <div id={props.uniqueId} className="collapse" data-parent={`#${props.parentId}`}>
        <div className="card-body">
          {props.text}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;