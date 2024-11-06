import React, { createContext, useState, useContext } from "react";


const AutContext = createContext();

// acesso ao context
export const useAut = () => useContext(AutContext);

// Provider de autenticação
export function AutProvider({ children }) {
  const [user, setUser] = useState(null); 

  const login = (name) => setUser({ name: name }); // verifica o login
  const logout = () => setUser(null); 

  return (
    <AutContext.Provider value={{ user, login, logout }}>
      {children}
    </AutContext.Provider>
  );
}