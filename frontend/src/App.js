import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import HomeDashBoard from "./modules/HomeDashboard";
import Login from "./modules/Login";

function App() {
  const history = useHistory();

  useEffect(() => {
    history.push("/login");
  });

  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/home" component={HomeDashBoard} />
    </Switch>
  );
}

export default App;
