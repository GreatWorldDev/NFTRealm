import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "../pages/Landing";
import Profile from "../pages/Profile";
import Soldier from "../pages/Soldier";
import Search from "../pages/Search";
function Routes() {
  return (
    <BrowserRouter className="bg-dark">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/profile" component={Profile} />
        <Route path="/item" component={Soldier} />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
