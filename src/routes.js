import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Movie from './pages/Movie';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/details/:id" component={Movie} />
      </Switch>
    </BrowserRouter>
  );
}
