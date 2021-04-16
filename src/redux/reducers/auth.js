const intialState = {
  results: {},
  info: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const login = (state = intialState, { type, payload }) => {
  switch (type) {
    case "POST_LOGIN_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "POST_LOGIN_FULFILLED":
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        results: payload.data.data,
        info: {
          ...payload.data.code,
          ...payload.data.success,
          ...payload.data.message,
        },
      };
    case "POST_LOGIN_REJECTED":
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
export default login;
