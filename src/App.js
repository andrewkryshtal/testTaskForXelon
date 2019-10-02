import React from 'react';
import Tabs from './containers/Tabs';
import Addons from './modules/Addons';
import Network from './modules/Network';
import Overview from './modules/Overview';
import MyOrg from './modules/MyOrg';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';


function App() {
  return (
    <Router history={history}>
        <Tabs>
          <Switch>
            <Route exact path="/my-org" component={MyOrg} />
            <Route path="/my-org/overview" component={Overview} />
            <Route path="/my-org/network" component={Network} />
            <Route path="/my-org/addons" component={Addons} />
          </Switch>
        </Tabs>
    </Router>
  );
}

export default App;
