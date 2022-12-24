import {
  api_url,
} from "../../utils/config";
import action from "./action";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_STATE,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_FAILED,
  REGISTER_NEW_USER_SUCCESS,
  REGISTER_NEW_USER_FAILED,
  LOADING_STATE,
  SHOW_AUTH_TOAST,
  VERIFY_OTP_LOADING,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILED,
  LOGOUT_USER,
  CHECK_EMAIL_REQUEST
} from "../types";

export const loginUser = (user) => async (dispatch) => {
  dispatch(action(LOGIN_STATE, true));
  try {
    const response = await axios({
      method: "POST",
      url: `${api_url}/auth/login/public`,
      data: user,
    });
    const data = await response.json();
    await AsyncStorage.setItem('AuthData', JSON.stringify(data));
    dispatch(action(LOGIN_STATE, false));
    dispatch(action(LOGIN_USER_SUCCESS, response.data));
  } catch (error) {
    dispatch(action(LOGIN_STATE, false));
    dispatch(action(LOGIN_USER_FAILED, error.response.data.errors));
  }
};

export const Init = async (dispatch) => {
  dispatch(action(LOGIN_STATE, true));
    try {
      let response = await AsyncStorage.getItem('AuthData');
      let authToken = JSON.parse(response)?.token;
      dispatch(action(LOGIN_STATE, authToken));
    }
    catch (err) {
      alert(err.message);
    }
};

export const Logout = async(dispatch) => {
    try {
      await AsyncStorage.removeItem('AuthData').token;
      dispatch(action(LOGOUT_USER));
    } catch (err) {
      alert(err.message);
    }
};

export const checkEmail = (email) => async(dispatch) => {
  dispatch(action(LOADING_STATE, true));
    try {
        dispatch(action(LOADING_STATE, true));
        const response = await fetch(`https://citizen-monitor.onrender.com/auth/register/email`, {
          method: 'POST',
          body: JSON.stringify({ email }),
          headers: { 'Content-Type': 'application/json' },
        });
        const userInfo = await response.json();
        dispatch(action(SHOW_AUTH_TOAST, true));
        dispatch(action(LOADING_STATE, false));
        setTimeout(() => {
          dispatch(action(SHOW_AUTH_TOAST, false));
        }, 3000);
        if (response.status >= 400) {
          dispatch(action(CHECK_EMAIL_FAILED, userInfo.error));
        } else {
          dispatch(action(CHECK_EMAIL_SUCCESS, userInfo.response));
        }
    } catch (err) {
      dispatch(action(CHECK_EMAIL_FAILED, err.message));
    }
}


export const verifyOtp = (data) => async (dispatch) => {
  dispatch(action(VERIFY_OTP_LOADING, true));
  try {
    const response = await axios({
      method: "POST",
      url: `${api_url}/auth/register/verify-otp`,
      data: data,
    });

    dispatch(action(VERIFY_OTP_SUCCESS, response));
  } catch (error) {
    dispatch(action(VERIFY_OTP_FAILED, error));
  }
};


export const registerNewUser = (user) => async (dispatch) => {
  dispatch(action(LOADING_STATE, true));
  try {
    const response = await axios({
      method: "POST",
      url: `${api_url}/auth/register/complete`,
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


