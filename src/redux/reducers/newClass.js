const intialState = {
  results: {},
  info: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const newClass = (state = intialState, { type, payload }) => {
  switch (type) {
    case "GET_newCLASS_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "GET_newCLASS_FULFILLED":
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
    case "GET_newCLASS_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        err: payload,
      };
    case "POST_registerClass":
      return {
        ...state,
        isFulfilled: true,
        results: {
          ...payload.newClass,
          0: payload.newClass[0].filter((items) => {
            return items.id_class !== payload.id_class;
          }),
        },
      };
    default:
      return state;
  }
};
export default newClass;
