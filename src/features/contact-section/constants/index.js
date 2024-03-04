import * as yup from "yup";

export const contactEmailSchema = yup.object({
  name: yup
    .string()
    .required("name is required")
    .typeError("name must be a string"),
  email: yup
    .string()
    .email()
    .required("email is required")
    .typeError("email be a string"),
  message: yup
    .string()
    .required("message is required")
    .typeError("message must be a string"),
});

export const formModel = {
  email: "",
  message: "",
  name: "",
};


export const data = [
    {
      title: "Email us at:",
      message: "enquiry@prolanx.co",
    },
    {
      title: "Address",
      message: "4 cecil Street, Scholes Wigan, WN13JL, Greater Manchester Uk",
    },
    {
      title: "Phone Number",
      message: "+44 (0) 773 372 4979",
    },
  ];