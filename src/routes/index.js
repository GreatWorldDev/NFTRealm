import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Landing from "../pages/Landing";
import Profile from "../pages/Profile";
function Routes() {
  return (
    <BrowserRouter className="bg-dark">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/Profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
