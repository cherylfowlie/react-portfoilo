import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/Portfolio" component={Portfolio} />
      <Route path="/Contact" component={Contact} />
    </Switch>
  );
};

export default Main;
