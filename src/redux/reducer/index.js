import myClassReducer from "./myClassReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  myClassReducer,
  userReducer,
});
export default allReducer;
