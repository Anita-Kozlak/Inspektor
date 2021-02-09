import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../components/constans/routes";
import PasswordForgetPage from "../components/PasswordForget";
import Login from "../views/Login";
import Register from "../views/Register";

const UnloggedUserTemplate = () => {
  return (
    <Switch>
      <Route exact path={routes.login} component={Login} />
      <Route path={routes.regiser} component={Register} />
      <Route path={routes.passwordForgetPage} component={PasswordForgetPage} />
    </Switch>
  );
};

export default UnloggedUserTemplate;
