import myClassReducer from "./myClassReducer";
import userReducer from "./userReducer";
import auth from "./auth";
import user from "./user";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  myClassReducer,
  userReducer,
  auth,
  user,
});
export default allReducer;
