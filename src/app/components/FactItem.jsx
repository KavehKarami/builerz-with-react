import React from 'react';

const FactItem = (props) => {
  return (

    <div className="col-6">
      <div className="fact-icon">
        <i className={`${props.icon}`}></i>
      </div>
      <div className="fact-text">
        <h2 data-toggle="counter-up">{props.counter}</h2>
        <p>{props.title}</p>
      </div>
    </div>

  );
}

export default FactItem;