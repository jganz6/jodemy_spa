import axios from "axios";
export const getMyClass = (url, token) => {
  return {
    type: "GET_CLASS",
    payload: axios.get(url, {
      headers: {
        "auth-token": token,
      },
    }),
  };
};
