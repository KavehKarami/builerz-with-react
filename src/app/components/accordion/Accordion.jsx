import React from 'react';

const Accordion = (props) => {
  return (
    <div id={props.parentId}>
      {props.children}
    </div>
  );
}

export default Accordion;