import { useRef, useState } from "react";
import { contactEmailSchema, formModel } from "../constants";
import { contactEmailApi } from "../api";
const apiStatus = { loading: "loading", success: "success", error: "error" };

export const useSendContactEmail = () => {
  const formRef = useRef(null);
  const [apiState, setApiState] = useState({
    status: null,
    message: null,
    data: null,
  });
  const resetForm = () => formRef?.current?.click();
  const handleSubmit = async (payload) => {
    setApiState({
      status: "loading",
      message: "Sending Email. Please wait, this will only a take a moment",
    });
    const response = await contactEmailApi(payload);

    console.log("response ", response);
    const { status, message } = response;
    setApiState({ status, message });
    if (status === "success") resetForm();
  };
  return {
    handleSubmit,
    resetForm,
    formRef,
    formModel,
    schema: contactEmailSchema,
    apiState,
  };
};
