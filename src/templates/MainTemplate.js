import React from "react";
import MainViewPage from "../components/MainView";
import { Switch, Route } from "react-router-dom";
import { routes } from "../components/constans/routes";

const MainTemplate = () => {
  return (
    <Switch>
      <Route exact path={routes.home} component={MainViewPage} />
    </Switch>
  );
};

export default MainTemplate;
