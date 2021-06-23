import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import recipePage from "./recipePage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/recipe/:id" component={recipePage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
