import axios from "axios";
export const postSubjectClass = (url, token, data) => {
  return {
    type: "POST_subjectCLASS",
    payload: axios.post(url, data, {
      headers: {
        "auth-token": token,
      },
    }),
  };
};
export const patchSubjectClass = (url, token, data) => {
  return {
    type: "PATCH_subjectCLASS",
    payload: axios.patch(url, data, {
      headers: {
        "auth-token": token,
      },
    }),
  };
};
export const deleteSubjectClass = (url, token, data) => {
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
