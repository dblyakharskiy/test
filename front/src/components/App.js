import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "../routes";
import { useAuth } from "../components/hooks/auth.hook";
import { AuthContext } from "../context/AuthContext";
import { Loader } from "../components/Loader";

function App() {
  const { login, logout, token, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider
      value={{ login, logout, token, userId, isAuthenticated }}
    >
      <Router>
        <div className="container">{routes}</div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
