import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Shelf from '../components/Shelf/Shelf';
import Home from '../components/Home/Home';

export default (
  <Switch>
    <Route exact path="/" component={ Home }/>
    <Route path="/bins/:bin" component={ Shelf }/>
  </Switch>
)