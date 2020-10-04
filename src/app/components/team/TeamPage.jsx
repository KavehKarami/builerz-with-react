import React from 'react';

const TeamPage = (props) => {
  return (
    <div className="team">
      <div className="container">
        <div className="section-header text-center">
          <p>Our Team</p>
          <h2>Meet Our Engineer</h2>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default TeamPage;