import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceContainer = () => {
  return (
    <div className="row">
      <ServiceItem title="Building Construction" href="img/service-1.jpg" imgURL={require("../../../assets/img/service-1.jpg")} dataWowDelay="0.1s">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
        </p>
      </ServiceItem>

      <ServiceItem title="Building Construction" href="img/service-2.jpg" imgURL={require("../../../assets/img/service-2.jpg")} dataWowDelay="0.2s">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
        </p>
      </ServiceItem>

      <ServiceItem title="Building Construction" href="img/service-3.jpg" imgURL={require("../../../assets/img/service-3.jpg")} dataWowDelay="0.3s">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
        </p>
      </ServiceItem>

      <ServiceItem title="Building Construction" href="img/service-4.jpg" imgURL={require("../../../assets/img/service-4.jpg")} dataWowDelay="0.4s">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
        </p>
      </ServiceItem>

      <ServiceItem title="Building Construction" href="img/service-5.jpg" imgURL={require("../../../assets/img/service-5.jpg")} dataWowDelay="0.5s">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
        </p>
      </ServiceItem>

      <ServiceItem title="Building Construction" href="img/service-6.jpg" imgURL={require("../../../assets/img/service-6.jpg")} dataWowDelay="0.6s">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
        </p>
      </ServiceItem>
    </div>
  );
}

export default ServiceContainer;