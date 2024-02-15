
import React, { useState } from 'react';

// Create a context to share modal state and functions
export const AppContext = React.createContext();

function AppProvider({ children }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);
  const data = {
    isMobileNavOpen,
    toggleMobileNav,
    isHeaderFixed,
    setIsHeaderFixed
  }
  return (
    <AppContext.Provider value={{...data}}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
