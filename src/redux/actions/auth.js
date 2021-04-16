import axios from "axios";
export const postLogin = (url, data) => {
  return {
    type: "POST_LOGIN",
    payload: axios.post(url, data),
  };
};
