import { api as apiInstance } from "../../../config/axios";
const route = "/send-mail/contact";


export const contactEmailApi = async (payload) => {
  try {
    let result = await apiInstance.post(route, payload);
    if (result.status !== 200) throw "Error sennding mail";
    return {
      status: "success",
      message: "Email has been sent successfully",
      data: null,
    };
  } catch (error) {
    console.log("contact api error ", error);
    return {
      status: "error",
      message: "There was an error sending your mail. Please try again",
      data: null,
    };
  }
};
