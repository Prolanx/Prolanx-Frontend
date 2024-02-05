import * as yup from "yup";
export const loginSchema = yup.object({
  email: yup
    .string()
    .required("email is required")
    .typeError("email be a string"),
  password: yup
    .string()
    .required("password is required")
    .typeError("password must be a string"),
});
