import axios from "axios";
export const getUser = (url, token) => {
  return {
    type: "GET_USER",
    payload: axios.get(url, {
      headers: {
        "auth-token": token,
      },
    }),
  };
};
