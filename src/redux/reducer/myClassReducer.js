const myClassReducer = (state = {}, action) => {
  switch (action.type) {
    case "get":
      return { ...action.payload };
    default:
      return state;
  }
};
export default myClassReducer;
