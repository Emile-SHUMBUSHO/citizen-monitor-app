import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_GET_USER_INFO,
  LOGIN_GET_USER_INFO_SUCCESS,
  LOGIN_GET_USER_INFO_FAILED,
  LOGIN_STATE,
  REGISTER_NEW_USER_SUCCESS,
  REGISTER_NEW_USER_FAILED,
  LOADING_STATE,
  CLEAR_ALL_ERRORS,
  SHOW_AUTH_TOAST,
} from "../types";

const initialState = {
  initialLogin: false,
  error: [],
  isError: false,
  isLoading: false,
  isLoggedIn: false,
  isGuest: false,
  userInfo: [],
  userToken: [],
  register: null,
  logout: null,
  success: false,
  showAuthToast: false,
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
    case LOGIN_GET_USER_INFO:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: payload,
      };
    case LOGIN_GET_USER_INFO_FAILED:
      return {
        ...state,
        error: payload,
        isError: true,
      };
    case REGISTER_NEW_USER_SUCCESS:
      return {
        ...state,
        register: true,
        userToken: payload,
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
    case CLEAR_ALL_ERRORS:
      return {
        ...state,
        error: [],
        isError: false,
      };
    case BROWSE_AS_GUEST:
      return {
        ...state,
        isGuest: payload,
        isError: false,
      };
    case LOGOUT_USER:
      return {
        ...state,
        initialLogin: false,
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
