import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Landing} exact path="/" />
        <Route component={OrphanagesMap} path="/app" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
