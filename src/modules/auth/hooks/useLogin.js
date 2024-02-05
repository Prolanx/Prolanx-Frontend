import { useRef, useState } from "react";
import { login } from "../data/auth.service";
import { loginSchema as schema } from "../constant";
import useCustomRouter from "../../../hooks/useCustomRouter";
const apiStatus = { loading: "loading", success: "success", error: "error" };

export const useLogin = () => {
  const formRef = useRef(null);
  const [apiState, setApiState] = useState({
    status: null,
    message: null,
    data: null,
  });

  const router = useCustomRouter();
  const formModel = { email: "", password: "" };
  const resetForm = () => formRef?.current?.click();
  const handleSubmit = async (payload) => {
    setApiState({
      status: "loading",
      message: "Signing in to your account please wait",
    });
    const { status, message, data } = await login(payload);
    setApiState({ status, message });
    if (status === "success") resetForm();
    // store the token to local storage
    localStorage.setItem("token", data.token);
    // redirect here

    router.navigate(router.state.currentUrl, true); // replace the current url
  };
  return {
    handleSubmit,
    resetForm,
    formRef,
    formModel,
    schema,
    apiState,
  };
};
