import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetail';
import Catalog from './pages/Catalog';

const Router = () => (
  <Switch>
    <Route path="/movies/:id/" component={MovieDetails} />
    <Route path="/" component={Catalog} />
  </Switch>
);
export default Router;