import { api_url } from "../../utils/config";
import action from "./action";
import axios, { AxiosError } from "axios";
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
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILED,
  INIT_LOGIN_USER,
  LOGOUT_USER,
  NAVIGATE_TO_VERIFY_OTP_SCREEN,
  NAVIGATE_TO_COMPLETE_REGISTRATION_SCREEN,
  NAVIGATE_TO_LOGIN_SCREEN,
} from "../types";
import { Alert } from "react-native";

export const loginUser = (user) => async (dispatch) => {
  dispatch(action(LOGIN_STATE, true));
  try {
    const response = await axios({
      method: "POST",
      url: `https://citizen-monitor.onrender.com/auth/login/public`,
      data: user,
    });
    dispatch(action(LOGIN_STATE, false));
    if (response.status >= 400) {
      dispatch(action(LOGIN_USER_FAILED, response.error));
    } else {
      await AsyncStorage.setItem("AuthData", JSON.stringify(response.data));
      dispatch(action(LOGIN_USER_SUCCESS, response.data));
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      dispatch(action(LOGIN_USER_FAILED, error.response.data));
      dispatch(action(LOGIN_USER_FAILED, error.response.status));
      dispatch(action(LOGIN_USER_FAILED, error.response.headers));
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      dispatch(action(LOGIN_USER_FAILED, error.request));
    } else {
      // Something happened in setting up the request that triggered an Error
      dispatch(action(LOGIN_USER_FAILED, error.message));
    }
    dispatch(action(LOGIN_USER_FAILED, error.config));
  }
};

export const Init = () => {
  return async (dispatch) => {
    try {
      const res = await AsyncStorage.getItem("AuthData");
      const token = JSON.parse(res)?.token;
      dispatch(action(INIT_LOGIN_USER, token));
    } catch (err) {
      alert(err.message);
    }
  };
};

export const Logout = () => {
  return async (dispatch) => {
    try {
      await AsyncStorage.removeItem("AuthData").token;
      dispatch(action(LOGOUT_USER, true));
    } catch (err) {
      alert(err.message);
    }
  };
};

export const checkEmail = (email, screenName) => async (dispatch) => {
  dispatch(action(LOADING_STATE, true));
  try {
    dispatch(action(LOADING_STATE, true));
    const response = await fetch(
      `https://citizen-monitor.onrender.com/auth/register/email`,
      {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const userInfo = await response.json();
    dispatch(action(LOADING_STATE, false));
    if (response.status >= 400) {
      dispatch(action(CHECK_EMAIL_FAILED, userInfo.error));
      Alert.alert(userInfo.error);
    } else {
      await AsyncStorage.setItem("email", JSON.stringify(userInfo.response));
      dispatch(action(CHECK_EMAIL_SUCCESS, userInfo.response.email));
      dispatch(action(SHOW_AUTH_TOAST, true));
      setTimeout(() => {
        dispatch(action(SHOW_AUTH_TOAST, false));
      }, 5000);
      dispatch(action(NAVIGATE_TO_VERIFY_OTP_SCREEN, screenName));
    }
  } catch (err) {
    dispatch(action(CHECK_EMAIL_FAILED, err.message));
    Alert.alert(err.message)
  }
};

export const verifyOtp = (verifyData, screenName) => async (dispatch) => {
  dispatch(action(LOADING_STATE, true));
  try {
    const response = await axios({
      method: "POST",
      url: "https://citizen-monitor.onrender.com/auth/register/verify-otp",
      data: verifyData,
    });
    dispatch(action(LOADING_STATE, false));
    if (response >= 400) {
      dispatch(action(VERIFY_OTP_FAILED, error));
    } else {
      dispatch(action(LOADING_STATE, false));
      dispatch(action(VERIFY_OTP_SUCCESS, response.data.response));
      await AsyncStorage.setItem("userEmailAndCode", JSON.stringify(response.data.response));
      dispatch(action(  NAVIGATE_TO_COMPLETE_REGISTRATION_SCREEN, screenName));
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      dispatch(action(VERIFY_OTP_FAILED, error.response.data));
      Alert.alert(error.response.data.error);
      dispatch(action(VERIFY_OTP_FAILED, error.response.status));
      dispatch(action(VERIFY_OTP_FAILED, error.response.headers));
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      dispatch(action(VERIFY_OTP_FAILED, error.request));
    } else {
      // Something happened in setting up the request that triggered an Error
      dispatch(action(VERIFY_OTP_FAILED, error.message));
    }
    dispatch(action(VERIFY_OTP_FAILED, error.config));
  }
};

export const registerNewUser = (user, screenName) => async (dispatch) => {
  console.log(user);
  dispatch(action(LOADING_STATE, true));
  try {
    const response = await axios({
      method: "POST",
      url: `https://citizen-monitor.onrender.com/auth/register/complete`,
      data: user,
    });
    dispatch(action(LOADING_STATE, false));
    if(response.status >= 400){
      dispatch(action(REGISTER_NEW_USER_FAILED, response.error));
    }else{
      dispatch(action(REGISTER_NEW_USER_SUCCESS, response));
      dispatch(action(NAVIGATE_TO_LOGIN_SCREEN, screenName));
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      dispatch(action(REGISTER_NEW_USER_FAILED, error.response.data));
      Alert.alert(error.response.data.error);
      dispatch(action(REGISTER_NEW_USER_FAILED, error.response.status));
      dispatch(action(REGISTER_NEW_USER_FAILED, error.response.headers));
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      dispatch(action(REGISTER_NEW_USER_FAILED, error.request));
    } else {
      // Something happened in setting up the request that triggered an Error
      dispatch(action(REGISTER_NEW_USER_FAILED, error.message));
    }
    dispatch(action(REGISTER_NEW_USER_FAILED, error.config));
  }
};
