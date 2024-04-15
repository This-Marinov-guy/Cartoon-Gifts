import React, { createContext, useContext } from 'react';
import { rootStore } from './rootStore';

const StoreContext = createContext(rootStore);

export const useStore = () => useContext(Provider);

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  );
};