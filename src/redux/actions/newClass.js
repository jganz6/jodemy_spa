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
export const registerClass = (id_class, newClass) => {
  return {
    type: "POST_registerClass",
    payload: { id_class, newClass },
    // payload: axios.post(
    //   url,
    //   { id_class },
    //   {
    //     headers: {
    //       "auth-token": token,
    //     },
    //   }
    // ),
  };
};
