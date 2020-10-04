import React from 'react';
import PageHeader from '../components/PageHeader';
import PortfolioPage from '../components/portfolio/PortfolioPage';
import LoadMore from '../components/shared/LoadMore';

const Portfolio = () => {
  return (
    <React.Fragment>
      <PageHeader name="Our Projects" />

      <PortfolioPage >
        <LoadMore />
      </PortfolioPage>

    </React.Fragment>
  );
}

export default Portfolio;