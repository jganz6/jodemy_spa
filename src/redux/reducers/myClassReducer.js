const intialState = {
  results: {},
  info: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const myClass = (state = intialState, { type, payload }) => {
  switch (type) {
    case "GET_CLASS_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "GET_CLASS_FULFILLED":
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
    case "GET_CLASS_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        err: payload,
      };
    // case "POST_registerCLASS_FULFILLED":
    //   return {
    //     ...state,
    //     isFulfilled: true,
    //     results: {
    //       ...payload.myClass,
    //       0: [...payload.myClass[0], payload.data.data.data],
    //     },
    //   };
    default:
      return state;
  }
};
export default myClass;
