const userReducer = (state = "", action) => {
  switch (action.type) {
    case "get":
      return (state = "getUser");
    case "add":
      return (state = "addUser");
    default:
      return state;
  }
};
export default userReducer;
