import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { RegPage } from "./pages/RegPage";
import { CreatePage } from "./pages/CreatePage";
import { LoginPage } from "./pages/LoginPage";
import { ItemPage } from "./pages/ItemPage";
import { AboutPage } from "./pages/AboutPage";
import { EditPage } from "./pages/EditPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/edit/:id">
          <EditPage />
        </Route>
        <Route path="/item" exact>
          <ItemPage />
        </Route>
        <Route path="/item/:id">
          <AboutPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Redirect to="/item" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/main" exact>
        <MainPage />
      </Route>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="/reg" exact>
        <RegPage />
      </Route>
      <Redirect to="/main" />
    </Switch>
  );
};
