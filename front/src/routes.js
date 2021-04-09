import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { RegPage } from "./pages/RegPage";
import { CreatePage } from "./pages/CreatePage";
import { MainPage } from "./pages/MainPage";
import { DeletePage } from "./pages/DeletePage";
import { AboutPage } from "./pages/AboutPage";
import { ListPage } from "./pages/ListPage";
import { AuthPage } from "./pages/AuthPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/auth" exact>
          <AuthPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/delete/:id" exact>
          <DeletePage />
        </Route>
        <Route path="/about/:id" exact>
          <AboutPage />
        </Route>
        <Route path="/list" exact>
          <ListPage />
        </Route>
        <Redirect to="create" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/auth" exact>
        <MainPage />
      </Route>
      <Route path="/reg" exact>
        <RegPage />
      </Route>
      <Redirect to="/reg" />
    </Switch>
  );
};
