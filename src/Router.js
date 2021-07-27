import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import KawoHome from "./Pages/KawoHome";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Startups from "./Pages/Startups";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={KawoHome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/startups" component={Startups} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
