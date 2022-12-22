import {
  api_url,
  storeToken,
} from "../../utils/config";
import action from "./action";
import axios from "axios";
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_STATE,
  REGISTER_NEW_USER_SUCCESS,
  REGISTER_NEW_USER_FAILED,
  LOADING_STATE,
  SHOW_AUTH_TOAST,
} from "../types";

export const loginUser = (user) => async (dispatch) => {
  dispatch(action(LOGIN_STATE, true));
  try {
    const response = await axios({
      method: "POST",
      url: `${api_url}/user/login`,
      data: user,
    });
    storeToken("token", response.data.token);
    dispatch(action(LOGIN_STATE, false));
    dispatch(action(LOGIN_USER_SUCCESS, response.data));
  } catch (error) {
    dispatch(action(LOGIN_STATE, false));
    dispatch(action(LOGIN_USER_FAILED, error.response.data.errors));
  }
};

export const registerNewUser = (user) => async (dispatch) => {
  dispatch(action(LOADING_STATE, true));
  try {
    const response = await axios({
      method: "POST",
      url: `${api_url}/user/register`,
      data: user,
    });
    storeToken("token", response.data.token);
    dispatch(action(REGISTER_NEW_USER_SUCCESS, response.data.token));
    dispatch(action(SHOW_AUTH_TOAST, true));
    dispatch(action(LOADING_STATE, false));
    setTimeout(() => {
      dispatch(action(SHOW_AUTH_TOAST, false));
    }, 1500);
  } catch (error) {
    dispatch(action(REGISTER_NEW_USER_FAILED, error.response.data));
  }
};
