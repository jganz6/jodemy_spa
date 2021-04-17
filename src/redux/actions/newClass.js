import axios from "axios";
export const getNewClass = (url, token) => {
  return {
    type: "GET_newCLASS",
    payload: axios.get(url, {
      headers: {
        "auth-token": token,
      },
    }),
  };
};
