const intialState = {
  results: {},
  info: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const subClass = (state = intialState, { type, payload }) => {
  switch (type) {
    case "GET_subCLASS_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "GET_subCLASS_FULFILLED":
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
    case "GET_subCLASS_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        err: payload,
      };
    case "DELETE_subjectCLASS_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "DELETE_subjectCLASS_FULFILLED":
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        results: {
          ...state.results,
          0: state.results[0].filter((items) => {
            return items.id_class !== payload.data.data[0].id_subject;
          }),
        },
        info: {
          code: payload.data.code,
          success: payload.data.success,
          message: payload.data.message,
        },
      };
    case "DELETE_subjectCLASS_REJECTED":
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
export default subClass;
