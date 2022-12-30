import action from "../actions/action";
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
} from "../types";

const initialState = {
  initialLogin: false,
  logoutSuccess: false,
  error: [],
  isError: false,
  isLoading: false,
  isLoggedIn: false,
  userInfo: [],
  userToken: [],
  register: null,
  logout: null,
  success: false,
  showAuthToast: false,
  email: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_STATE:
      return {
        ...state,
        isLoading: payload,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userToken: payload,
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        error: payload,
        isError: true,
        userInfo: "",
      };
    case INIT_LOGIN_USER:
      return {
        ...state,
        error: '',
        isError: false,
        userToken: payload,
        initialLogin: true
      };
    case CHECK_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        success: true,
        email: payload,
      };
    case CHECK_EMAIL_FAILED:
      return {
        ...state,
        error: payload,
        isError: true,
        isLoading: false,
      };
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        success: true,
        userInfo: payload,
      };
    case VERIFY_OTP_FAILED:
      return {
        ...state,
        error: payload,
        isError: true,
        isLoading: false,
      };
    case REGISTER_NEW_USER_SUCCESS:
      return {
        ...state,
        register: true,
        isLoggedIn: true,
        isLoading: false,
        error: "",
        success: true,
      };
    case REGISTER_NEW_USER_FAILED:
      return {
        ...state,
        error: payload,
        isError: true,
        isLoading: false,
      };
    case LOADING_STATE:
      return {
        ...state,
        isLoading: payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        initialLogin: false,
        logoutSuccess: true,
        error: [],
        isError: false,
        isLoading: false,
        isLoggedIn: false,
        userInfo: [],
        userToken: [],
        register: [],
        logout: Math.random(),
        success: false,
      };
    case SHOW_AUTH_TOAST:
      return {
        showAuthToast: payload,
      };
    default:
      return state;
  }
};
