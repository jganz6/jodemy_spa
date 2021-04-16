import myClassReducer from "./myClassReducer";
import userReducer from "./userReducer";
import auth from "./auth";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  myClassReducer,
  userReducer,
  auth,
});
export default allReducer;
