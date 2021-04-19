import { createContext } from "react";

function guest() {}

export const AuthContext = createContext({
  login: guest,
  logout: guest,
  token: null,
  userId: null,
  isAuthenticated: false,
});
