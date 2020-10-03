import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Single from './components/Single';
import Team from './components/Team';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/blog" component={Blog} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/service" component={Service} exact={true} />
        <Route path="/single" component={Single} exact={true} />
        <Route path="/team" component={Team} exact={true} />
      </Switch>
      <div className="back-to-top"><i className="fa fa-chevron-up"></i></div>
    </Router>
  );
}

export default App;