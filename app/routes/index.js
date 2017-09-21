import React from 'react';
import {Switch, Route} from 'react-router';
import CoreLayout from '../layouts/CoreLayout';
import Home from './Home';
// import CounterPage from './containers/CounterPage';

export default () => (
  <div>
    <Switch>
      <CoreLayout>
        <Route path='/' component={Home} />
      </CoreLayout>
      {/* <Route path='/counter' component={CounterPage} /> */}
    </Switch>
  </div>
);
