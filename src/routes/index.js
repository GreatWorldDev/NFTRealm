import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "../pages/Landing";
import Profile from "../pages/Profile";
import Soldier from "../pages/Soldier";
function Routes() {
  return (
    <BrowserRouter className="bg-dark">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Soldier" component={Soldier} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
