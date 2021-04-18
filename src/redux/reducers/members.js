const intialState = {
  results: {},
  info: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
export const members = (state = intialState, { type, payload }) => {
  switch (type) {
    case "GET_MEMBERS_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "GET_MEMBERS_FULFILLED":
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        results: payload.data.data,
        info: {
          code: payload.data.code,
          success: payload.data.success,
          message: payload.data.message,
        },
      };
    case "GET_MEMBERS_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        err: payload,
      };
    default:
      return state;
  }
};
export const memberSubjects = (state = intialState, { type, payload }) => {
  switch (type) {
    case "GET_memberSUBJECTS_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "GET_memberSUBJECTS_FULFILLED":
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        results: payload.data.data,
        info: {
          code: payload.data.code,
          success: payload.data.success,
          message: payload.data.message,
        },
      };
    case "GET_memberSUBJECTS_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        err: payload,
      };
    default:
      return state;
  }
};
