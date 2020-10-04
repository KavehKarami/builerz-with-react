import React from 'react';

const TeamContainer = (props) => {
  return (
    <div className="row">
      {props.children}
    </div>
  );
}

export default TeamContainer;