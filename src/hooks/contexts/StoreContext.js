import { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const value = {
    currentUser,
    setCurrentUser,
    isAuthenticated,
    setIsAuthenticated,
    isShow,
    setIsShow,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
export default StoreContextProvider;
