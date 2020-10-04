import React from 'react';
import PageHeader from '../components/PageHeader';
import TeamPage from '../components/team/TeamPage';

const Team = () => {
  return (
    <React.Fragment>
      <PageHeader name="Our Team" />
      <TeamPage />
    </React.Fragment>

  );
}

export default Team;