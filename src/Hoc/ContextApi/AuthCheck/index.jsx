import React, { createContext } from "react";

export const AuthContext = createContext();

function AuthContextApi({ children }) {
  return (
    <AuthContext.Provider value={{ data: "cashier" }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextApi;