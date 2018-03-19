import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Onemod from './container/Onemod/'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/Onemod" component={Onemod} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
