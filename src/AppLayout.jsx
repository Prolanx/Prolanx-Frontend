import React, { useState } from "react";
import MobileNav from "./components/nav/Mobile-Nav";
import AppRoutes from "./routes/AppRoutes"
import useLocationHook from "./hooks/useLocationHook";
function AppLayout() {

  useLocationHook();
  return (
    <React.Fragment>
      <MobileNav />
      <AppRoutes />
    </React.Fragment>
  );
}

export default AppLayout;
