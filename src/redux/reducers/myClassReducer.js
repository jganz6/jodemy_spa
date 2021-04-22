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
          code: payload.data.code,
          success: payload.data.success,
          message: payload.data.message,
        },
      };
    case "GET_CLASS_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        err: payload,
      };
    case "POST_registerCLASS_FULFILLED":
      return {
        ...state,
        isFulfilled: true,
        results: {
          ...state.results,
          0: [payload.data.data[0].data[0], ...state.results[0]],
        },
      };
    case "POSTCLASS_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "POSTCLASS_FULFILLED":
      if (state.results.data[0].length < 10) {
        return {
          ...state,
          isFulfilled: true,
          results: {
            ...state.results,
            0: [payload.data.data[0].data[0], ...state.results[0]],
          },
        };
      } else {
        return {
          ...state,
          isFulfilled: true,
          results: {
            ...state.results,
          },
        };
      }
    case "POSTCLASS_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        err: payload,
      };
    case "PATCH_updateCLASS_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "PATCH_updateCLASS_FULFILLED":
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        results: {
          ...state.results,
          0: [
            ...state.results[0],
            {
              ...state.results[0].find(
                (items) =>
                  items.id_class === payload.data.data[0].data[0].id_class
              ),
              ...payload.data.data[0].data[0],
            },
          ],
        },
        info: {
          code: payload.data.code,
          success: payload.data.success,
          message: payload.data.message,
        },
      };
    case "PATCH_updateCLASS_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        err: payload,
      };
    case "DELETE_deleteCLASS_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "DELETE_deleteCLASS_FULFILLED":
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        results: {
          ...state.results,
          0: state.results[0].filter((items) => {
            return items.id_class !== payload.data.data[0].id_class;
          }),
        },
        info: {
          code: payload.data.code,
          success: payload.data.success,
          message: payload.data.message,
        },
      };
    case "DELETE_deleteCLASS_REJECTED":
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
export default myClass;
