import { combineReducers } from "redux";
import authReducer from "./authReducer";
import allCategoryReducer from "./categoryReducer";
import eventReducer from "./eventReducer";
import changePasswordReducer from "./changePasswordReducer";
import favouritesReducer from "./favouritesReducer";
import updateUserReducer from "./updateUserReducer";
import resetPasswordReducer from "./resetPasswordReducer";
import purchaseReducer from "./purchaseReducer";
import activeTicketReducer from "./ticketReducer";

export default combineReducers({
  auth: authReducer,
  category: allCategoryReducer,
  event: eventReducer,
  changePassword: changePasswordReducer,
  favourite: favouritesReducer,
  updateUser: updateUserReducer,
  resetPassword: resetPasswordReducer,
  updateUser: updateUserReducer,
  payment: purchaseReducer,
  activeTickets: activeTicketReducer,
});
