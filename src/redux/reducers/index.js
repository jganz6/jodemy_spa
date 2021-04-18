import myClassReducer from "./myClassReducer";
import auth from "./auth";
import user from "./user";
import newClass from "./newClass";
import registerCLASS from "./registerClass";
import subClass from "./subClassReducer";
import { members, memberSubjects } from "./members";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  subClass,
  registerCLASS,
  myClassReducer,
  auth,
  user,
  newClass,
  members,
  memberSubjects,
});
export default allReducer;
