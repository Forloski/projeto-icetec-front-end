import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import SignIn from "../pages/signin";

import Dashboard from "../pages/dashboard";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
    <Route path="/dashboard/create" exact component={Dashboard} isPrivate />
    <Route
      path="/dashboard/candidate/:id"
      exact
      component={Dashboard}
      isPrivate
    />
    <Route path="/dashboard:tech" component={Dashboard} isPrivate />
    <Route path="/dashboard/filter" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
