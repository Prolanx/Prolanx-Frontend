import { api as apiInstance } from "../../../config/axios";

const token = localStorage.getItem("token");
const headers = {
  "Content-Type": "application/json", // Example content type, adjust as needed
  Authorization: "Bearer " + token, // Example authorization header, adjust as needed
  // Add any other headers you require
};

const BASE_URL = ""/// Need to change the base url
const index = BASE_URL + "send-email/";
const route = { singleRecepient: index + "single" };

export const sendMail = async (payload) => {
  try {
    let result = await apiInstance.post(route.singleRecepient, payload, { headers });
    // console.log("result ", result);
    return {
      status: "success",
      message: "Email has been sent successfully.",
      data: null,
    };
    // return validateResponse(result);
  } catch (error) {
    // console.log("error ", error);
    return {
      status: "error",
      message: "There was an error sending the mail",
      data: null,
    };
    // return validateResponse(error);
  }
};
