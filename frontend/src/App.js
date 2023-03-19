import React from "react";
import { Route, Switch } from "react-router-dom";

import HomeDashBoard from "./modules/HomeDashboard";
import Login from "./modules/Login";

function App() {
  return (
    <Switch>
      <Route path={["/", "/login"]} component={Login} exact />
      <Route path="/home" component={HomeDashBoard} />
    </Switch>
  );
}

export default App;
