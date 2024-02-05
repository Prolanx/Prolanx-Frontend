import { useLocation, useNavigate } from "react-router";

function useCustomRouter() {
  const navigate = useNavigate();

  const location = useLocation();

  const redirect = (url, replace = false) => {
    navigate(url, { replace });
  };

  return {
    navigate: redirect,
    currentUrl: location.pathname || "/home",
    state: location.state,
  };
}

export default useCustomRouter;
