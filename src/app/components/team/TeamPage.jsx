import React from 'react';
import TeamContainer from './TeamContainer';

const TeamPage = () => {
  return (

    <div className="team">
      <div className="container">
        <div className="section-header text-center">
          <p>Our Team</p>
          <h2>Meet Our Engineer</h2>
        </div>
        <TeamContainer />
      </div>
    </div>
  );
}

export default TeamPage;