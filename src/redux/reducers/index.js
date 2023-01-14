import { combineReducers } from "redux";
import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import displacementReducer from "./displacementReducer";
import leaderReducer from "./leaderReducer";
export default combineReducers({
  admin: adminReducer,
  leader: leaderReducer,
  auth: authReducer,
  displacement: displacementReducer,
});
