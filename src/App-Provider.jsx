
import React, { useState } from 'react';
import useLocationHook from './hooks/useLocationHookV2';

// Create a context to share modal state and functions
export const AppContext = React.createContext();

function AppProvider({ children }) {

  const {isLocal} = useLocationHook()
  
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);
  const data = {
    isMobileNavOpen,
    toggleMobileNav,
    isHeaderFixed,
    setIsHeaderFixed,
    isLocal,
  }
  return (
    <AppContext.Provider value={{...data}}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
