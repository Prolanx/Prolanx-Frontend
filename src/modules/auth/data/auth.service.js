import axios from "axios";
let BASE_URL = "http://localhost:5000/";

const index = BASE_URL + "auth/";
const route = { index, login: index + "login" };
export const login = async (payload) => {
  try {
    let result = await axios.post(route.login, payload);
    console.log("result ", result);

    return {
      status: result.data.status,
      message: result.data.message,
      data: result.data.data,
    };
  } catch (error) {
    console.log("error ", error);
    return {
      status: "error",
      message: "There was an signing in to your account",
      data: null,
    };
  }
};
