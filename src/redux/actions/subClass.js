import axios from "axios";
export const getSubClass = (url, token) => {
  return {
    type: "GET_subCLASS",
    payload: axios.get(url, {
      headers: {
        "auth-token": token,
      },
    }),
  };
};
//host/class/subjectClass/:id_class
