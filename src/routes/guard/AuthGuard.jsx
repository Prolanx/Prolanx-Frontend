import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useCustomRouter from "../../hooks/useCustomRouter";

function AuthGuard() {
  // get current location
  const router = useCustomRouter();
  //   get token from local storage
  //   if token is not null then verify the token first before granting access
  const token = localStorage.getItem("token");



  return (
    <React.Fragment>
      {!token ? (
        <Navigate
          replace
          to="/auth"
          state={{ currentUrl: router.currentUrl }}
        />
      ) : (
        <Outlet />
      )}
    </React.Fragment>
  );
}

export default AuthGuard;
