import { combineReducers } from "redux";
import authReducer from "./authReducer";
import displacementReducer from "./displacementReducer";

export default combineReducers({
  auth: authReducer,
  displacement: displacementReducer,
});
