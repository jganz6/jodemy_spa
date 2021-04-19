import axios from "axios";
export const createCLASS = (url, token, formData) => {
  return {
    type: "POST_createCLASS",
    payload: axios.post(url, formData, {
      headers: {
        "auth-token": token,
        "Content-Type": "multipart/form-data",
      },
    }),
  };
};
export const updateCLASS = (url, token, formData) => {
  return {
    type: "PATCH_updateCLASS",
    payload: axios.patch(url, formData, {
      headers: {
        "auth-token": token,
        "Content-Type": "multipart/form-data",
      },
    }),
  };
};
export const deleteCLASS = (url, token, data) => {
  return {
    type: "DELETE_deleteCLASS",
    payload: axios.delete(url, data, {
      headers: {
        "auth-token": token,
      },
    }),
  };
};
