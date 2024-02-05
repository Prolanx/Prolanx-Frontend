import axios from "axios";
let BASE_URL = "http://localhost:5000/";
const index = BASE_URL + "send-email/";
const route = { index, singleRecepient: index + "single" };

const token = localStorage.getItem("token");
const headers = {
  "Content-Type": "application/json", // Example content type, adjust as needed
  Authorization: "Bearer " + token, // Example authorization header, adjust as needed
  // Add any other headers you require
};
export const sendMail = async (payload) => {
  try {
    let result = await axios.post(route.singleRecepient, payload, { headers });
    console.log("result ", result);
    return {
      status: "success",
      message: "Email has been sent successfully.",
      data: null,
    };
    // return validateResponse(result);
  } catch (error) {
    console.log("error ", error);
    return {
      status: "error",
      message: "There was an error sending the mail",
      data: null,
    };
    // return validateResponse(error);
  }
};
