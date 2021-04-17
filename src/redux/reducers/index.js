import myClassReducer from "./myClassReducer";
import userReducer from "./userReducer";
import auth from "./auth";
import user from "./user";
import newClass from "./newClass";
import registerCLASS from "./registerClass";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  registerCLASS,
  myClassReducer,
  userReducer,
  auth,
  user,
  newClass,
});
export default allReducer;
