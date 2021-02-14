import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import SignIn from "../pages/signin";

import Dashboard from "../pages/dashboard";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
