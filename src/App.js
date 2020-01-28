import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import HostsPage from './containers/HostsPage/HostsPage';
import NotFound from './components/NotFound/NotFound';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Switch>
        <Route path="/hosts/:name" exact component={HostsPage} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
