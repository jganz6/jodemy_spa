import axios from "axios";
export const registerCLASS = (url, token) => {
  return {
    type: "POST_registerCLASS",
    payload: axios.post(
      url,
      {},
      {
        headers: {
          "auth-token": token,
        },
      }
    ),
  };
};
