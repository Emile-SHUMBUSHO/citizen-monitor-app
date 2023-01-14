import {
  FETCH_ALL_VILLAGE_CITIZENS_FAILED,
  FETCH_ALL_VILLAGE_CITIZENS__SUCCESS,
  NAVIGATE_TO_CITIZENS_SCREEN,
  LOADING_STATE,
  SHOW_ADMIN_TOAST,
  APPOINT_LEADER_SUCCESS,
  APPOINT_LEADER_FAILED,
  DISAPPOINT_LEADER_SUCCESS,
  DISAPPOINT_LEADER_FAILED,
} from "../types";

const initialState = {
  error: [],
  isError: false,
  isLoading: false,
  success: false,
  citizens: [],
  showAdminToast: false,
  currentCitizensScreen: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_VILLAGE_CITIZENS__SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        success: true,
        citizens: payload,
      };
    case FETCH_ALL_VILLAGE_CITIZENS_FAILED:
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
    case NAVIGATE_TO_CITIZENS_SCREEN:
      return {
        ...state,
        currentCitizensScreen: payload,
      };
    case SHOW_ADMIN_TOAST:
      return {
        showAdminToast: payload,
      };
    case APPOINT_LEADER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        success: true,
        citizens: payload,
      };
    case APPOINT_LEADER_FAILED:
      return {
        ...state,
        error: payload,
        isError: true,
        isLoading: false,
      };

    case DISAPPOINT_LEADER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        success: true,
        citizens: payload,
      };
    case DISAPPOINT_LEADER_FAILED:
      return {
        ...state,
        error: payload,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};
