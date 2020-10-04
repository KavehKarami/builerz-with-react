import React from 'react';
import { Link, Route } from "react-router-dom";

const CustomLink = (props) => {
  return (
    <Route
      exact={props.exact}
      path={props.path}
      children={({ match }) =>
        match
          ?
          (<Link className="nav-item nav-link active" to={props.path}>{props.label}</Link>)
          :
          (<Link className="nav-item nav-link" to={props.path}>{props.label}</Link>)
      }
    />);
}

export default CustomLink;