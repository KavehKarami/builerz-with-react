import React from 'react';
import FactItem from './FactItem';

const Fact = () => {
  return (
    <div className="fact">
      <div className="container-fluid">
        <div className="row counters">
          <div className="col-md-6 fact-left wow slideInLeft">
            <div className="row">
              <FactItem icon="flaticon-worker" counter="109" title="Expert Workers" />
              <FactItem icon="flaticon-building" counter="485" title="Happy Clients" />
            </div>
          </div>
          <div className="col-md-6 fact-right wow slideInRight">
            <div className="row">
              <FactItem icon="flaticon-address" counter="789" title="Completed Projects" />
              <FactItem icon="flaticon-crane" counter="890" title="Running Projects" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fact;