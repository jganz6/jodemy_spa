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
export const getMembers = (url, token) => {
  return {
    type: "GET_MEMBERS",
    payload: axios.get(url, {
      headers: {
        "auth-token": token,
      },
    }),
  };
};
// http://localhost:8000/class/members/:id_class
export const getMemberSubjects = (url, token) => {
  return {
    type: "GET_memberSUBJECTS",
    payload: axios.get(url, {
      headers: {
        "auth-token": token,
      },
    }),
  };
};
// http://localhost:8000/class/members/subject/:id_class.:id_members
