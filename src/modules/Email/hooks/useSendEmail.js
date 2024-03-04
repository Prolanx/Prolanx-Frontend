import { useRef, useState } from "react";
import { sendMail } from "../data/email.service";
import { sendMailSchema } from "../constant";
const apiStatus = { loading: "loading", success: "success", error: "error" };


export const useSendEmail = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [apiState, setApiState] = useState({
    status: null,
    message: null,
    data: null,
  });

  const formModel = {
    email: "",
    subject: "",
    message: "",
    name: "",
  };
  const resetForm = () => formRef?.current?.click();
  const handleSubmit = async (payload) => {
    setApiState({
      status: "loading",
      message: "Sending Email. Please wait",
    });
    const { status, message } = await sendMail(payload);
    setApiState({ status, message });
    if (status === "success") resetForm();
  };
  return {
    handleSubmit,
    resetForm,
    formRef,
    formModel,
    status,
    schema: sendMailSchema,
    apiState,
  };
};
