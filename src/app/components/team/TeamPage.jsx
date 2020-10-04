import React from 'react';
import TeamContainer from './TeamContainer';
import TeamItem from './TeamItem';

const TeamPage = () => {
  return (

    <div className="team">
      <div className="container">
        <div className="section-header text-center">
          <p>Our Team</p>
          <h2>Meet Our Engineer</h2>
        </div>
        <TeamContainer >
          <TeamItem imgURL={require("../../../assets/img/team-1.jpg")} dataWowDelay="0.1s" person="Adam Phillips" responsibility="CEO & Founder" />
          <TeamItem imgURL={require("../../../assets/img/team-2.jpg")} dataWowDelay="0.2s" person="Dylan Adams" responsibility="Civil Engineer" />
          <TeamItem imgURL={require("../../../assets/img/team-3.jpg")} dataWowDelay="0.3s" person="Jhon Doe" responsibility="Interior Designer" />
          <TeamItem imgURL={require("../../../assets/img/team-4.jpg")} dataWowDelay="0.4s" person="Josh Dunn" responsibility="Painter" />

          <TeamItem imgURL={require("../../../assets/img/team-1.jpg")} dataWowDelay="0.1s" person="Adam Phillips" responsibility="CEO & Founder" />
          <TeamItem imgURL={require("../../../assets/img/team-2.jpg")} dataWowDelay="0.2s" person="Dylan Adams" responsibility="Civil Engineer" />
          <TeamItem imgURL={require("../../../assets/img/team-3.jpg")} dataWowDelay="0.3s" person="Jhon Doe" responsibility="Interior Designer" />
          <TeamItem imgURL={require("../../../assets/img/team-4.jpg")} dataWowDelay="0.4s" person="Josh Dunn" responsibility="Painter" />
        </TeamContainer>
      </div>
    </div>
  );
}

export default TeamPage;