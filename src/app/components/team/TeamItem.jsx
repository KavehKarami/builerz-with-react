import React from 'react';

const TeamItem = (props) => {
  return (
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={props.dataWowDelay || "0"}>
      <div className="team-item">
        <div className="team-img">
          <img src={props.imgURL} alt="Team" />
        </div>
        <div className="team-text">
          <h2>{props.person}</h2>
          <p>{props.responsibility}</p>
        </div>

        <div className="team-social">
          <a className="social-tw" href="/team/#"><i className="fab fa-twitter"></i></a>
          <a className="social-fb" href="/team/#"><i className="fab fa-facebook-f"></i></a>
          <a className="social-li" href="/team/#"><i className="fab fa-linkedin-in"></i></a>
          <a className="social-in" href="/team/#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>

  );
}

export default TeamItem;