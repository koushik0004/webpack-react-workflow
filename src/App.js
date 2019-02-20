import React, { Component, lazy, Suspense } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Users from './containers/Users';


const Pizza = lazy(() => import('./containers/Pizza'));

const loadingMsg = () => (
  <section>Content is loading... Please wait.</section>
);
export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/">users</Link> |
          <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Suspense fallback={loadingMsg}>
            <Switch>
              <Route path="/" component={Users} />
              <Route path="/pizza" component={Pizza} />
            </Switch>
          </Suspense>
        </div>
      </div>
    );
  }
}
