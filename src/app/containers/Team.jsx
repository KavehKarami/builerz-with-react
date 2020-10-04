import React from 'react';
import PageHeader from '../components/PageHeader';
import TeamContainer from '../components/team/TeamContainer';
import TeamItem from '../components/team/TeamItem';
import TeamPage from '../components/team/TeamPage';

const Team = () => {
  return (
    <React.Fragment>
      <PageHeader name="Our Team" />
      <TeamPage>
        <TeamContainer >
          <TeamItem imgURL={require("../../assets/img/team-1.jpg")} dataWowDelay="0.1s" person="Adam Phillips" responsibility="CEO & Founder" />
          <TeamItem imgURL={require("../../assets/img/team-2.jpg")} dataWowDelay="0.2s" person="Dylan Adams" responsibility="Civil Engineer" />
          <TeamItem imgURL={require("../../assets/img/team-3.jpg")} dataWowDelay="0.3s" person="Jhon Doe" responsibility="Interior Designer" />
          <TeamItem imgURL={require("../../assets/img/team-4.jpg")} dataWowDelay="0.4s" person="Josh Dunn" responsibility="Painter" />

          <TeamItem imgURL={require("../../assets/img/team-1.jpg")} dataWowDelay="0.1s" person="Adam Phillips" responsibility="CEO & Founder" />
          <TeamItem imgURL={require("../../assets/img/team-2.jpg")} dataWowDelay="0.2s" person="Dylan Adams" responsibility="Civil Engineer" />
          <TeamItem imgURL={require("../../assets/img/team-3.jpg")} dataWowDelay="0.3s" person="Jhon Doe" responsibility="Interior Designer" />
          <TeamItem imgURL={require("../../assets/img/team-4.jpg")} dataWowDelay="0.4s" person="Josh Dunn" responsibility="Painter" />
        </TeamContainer>
      </TeamPage>
    </React.Fragment>

  );
}

export default Team;