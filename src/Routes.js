import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import App from './components/App';


const Routes = (
  <Router>
    <div>
      <Route exact path="/" component = {Home} />
      <Route exact path="/haneen" render={props => <App user_id="7" {...props} />} />
      <Route exact path="/afreen" render={props => <App user_id="8" {...props} />} />
      
    </div>
  </Router>
)

export default Routes;
