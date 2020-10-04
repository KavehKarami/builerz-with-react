import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioContainer = () => {
  return (
    <div className="row portfolio-container" >

      <PortfolioItem category="first" dataWowDelay="0.1s" title="Project Name" imgURL={require("../../../assets/img/portfolio-1.jpg")} href="img/portfolio-1.jpg" >
        <p>
          Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
      </p>
      </PortfolioItem>

      <PortfolioItem category="second" dataWowDelay="0.2s" title="Project Name" imgURL={require("../../../assets/img/portfolio-2.jpg")} href="img/portfolio-2.jpg" >
        <p>
          Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
      </p>
      </PortfolioItem>

      <PortfolioItem category="third" dataWowDelay="0.3s" title="Project Name" imgURL={require("../../../assets/img/portfolio-3.jpg")} href="img/portfolio-3.jpg" >
        <p>
          Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
      </p>
      </PortfolioItem>

      <PortfolioItem category="first" dataWowDelay="0.4s" title="Project Name" imgURL={require("../../../assets/img/portfolio-4.jpg")} href="img/portfolio-4.jpg" >
        <p>
          Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
      </p>
      </PortfolioItem>

      <PortfolioItem category="second" dataWowDelay="0.5s" title="Project Name" imgURL={require("../../../assets/img/portfolio-5.jpg")} href="img/portfolio-5.jpg" >
        <p>
          Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
      </p>
      </PortfolioItem>

      <PortfolioItem category="third" dataWowDelay="0.6s" title="Project Name" imgURL={require("../../../assets/img/portfolio-6.jpg")} href="img/portfolio-6.jpg" >
        <p>
          Lorem ipsum dolor sit amet elit. Phasel nec pretium mi. Curabit facilis ornare velit non. Aliqu metus tortor, auctor id gravi condime, viverra quis sem.
      </p>
      </PortfolioItem>
    </div>
  );
}

export default PortfolioContainer;