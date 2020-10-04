import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from './containers/About';
import Blog from './containers/Blog';
import Contact from './containers/Contact';
import Home from './containers/Home';
import Portfolio from './containers/Portfolio';
import Service from './containers/Service';
import Single from './containers/Single';
import Team from './containers/Team';
import Layout from './containers/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" component={About} exact={true} />
          <Route path="/about" component={About} exact={true} />
          <Route path="/blog" component={Blog} exact={true} />
          <Route path="/contact" component={Contact} exact={true} />
          <Route path="/portfolio" component={Portfolio} exact={true} />
          <Route path="/service" component={Service} exact={true} />
          <Route path="/single" component={About} exact={true} />
          <Route path="/team" component={About} exact={true} />
        </Switch>
        <div className="back-to-top"><i className="fa fa-chevron-up"></i></div>
      </Layout>
    </Router>
  );
}

export default App;