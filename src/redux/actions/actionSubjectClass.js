import axios from "axios";
export const postSubjectCLASS = (url, token, data) => {
  return {
    type: "POST_subjectCLASS",
    payload: axios.post(url, data, {
      headers: {
        "auth-token": token,
      },
    }),
  };
};
export const patchSubjectCLASS = (url, token, data) => {
  return {
    type: "PATCH_subjectCLASS",
    payload: axios.patch(url, data, {
      headers: {
        "auth-token": token,
      },
    }),
  };
};
export const deleteSubjectCLASS = (url, token, data) => {
  return {
    type: "DELETE_subjectCLASS",
    payload: axios.delete(url, data, {
      headers: {
        "auth-token": token,
      },
    }),
  };
};
export const addScore = (url, token, data) => {
  return {
    type: "PATCH_addScore",
    payload: axios.patch(url, data, {
      headers: {
        "auth-token": token,
      },
    }),
  };
};
