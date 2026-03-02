import React, { createContext, useContext, useEffect, useRef } from 'react';
import { initializeRootStore } from './rootStore';

const StoreContext = createContext(null);

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
  const storeRef = useRef(null);
  if (!storeRef.current) {
    storeRef.current = initializeRootStore();
  }

  useEffect(() => {
    // Hydrate the checkout store from localStorage only after the first client
    // render so the initial render matches the server-rendered HTML.
    storeRef.current.checkoutStore.hydrate();
  }, []);

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  );
};
