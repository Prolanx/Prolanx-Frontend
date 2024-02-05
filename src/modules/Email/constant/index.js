import * as yup from "yup";
export const sendMailSchema = yup.object({
  email: yup.string().required("email is required").typeError("email be a string"),
  subject: yup.string().required("subject is required").typeError("subject must be a string"),
  message: yup.string().required("message is required").typeError("message must be a string"),
});


