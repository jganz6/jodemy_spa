const intialState = {
  results: {},
  info: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const registerCLASS = (state = intialState, { type, payload }) => {
  switch (type) {
    case "POST_registerCLASS_FULFILLED":
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        results: {
          ...payload.data.data[0],
        },
      };
    case "POST_registerCLASS_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "POST_registerCLASS_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        err: payload.data,
      };
    default:
      return state;
  }
};
export default registerCLASS;
