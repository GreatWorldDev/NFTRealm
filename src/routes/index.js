import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Landing from "../pages/Landing";
import Profile from "../pages/Profile";
import Soldier from "../pages/Soldier";
import Search from "../pages/Search";
import ConnectWallet from "../pages/ConnectWallet";
import Create from "../pages/Create";
function Routes() {
  return (
    <BrowserRouter className="bg-dark">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/profile" component={Profile} />
        <Route path="/item" component={Soldier} />
        <Route path="/search" component={Search} />
        <Route path="/connectwallet" component={ConnectWallet} />
        <Route path="/create" component={Create} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
