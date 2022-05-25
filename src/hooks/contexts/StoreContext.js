import { createContext, useState } from 'react';

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [page, setPage] = useState('home');

  const value = {
    currentUser,
    setCurrentUser,
    isAuthenticated,
    setIsAuthenticated,
    isShow,
    setIsShow,
    page,
    setPage,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
export default StoreContextProvider;
