import {
  LOADING_STATE,
  SHOW_LEADER_TOAST,
  FETCH_CITIZENS_REQUESTS_SUCCESS,
  FETCH_CITIZENS_REQUESTS_FAILED,
  INIT_LOADING_STATE,
  FETCH_CITIZENS_SUCCESS,
  FETCH_CITIZENS_FAILED,
} from "../types";

const initialState = {
  error: [],
  isError: false,
  isLoading: false,
  initialLoading: false,
  success: false,
  citizens: [],
  citizensInVillage: [],
  showLeaderToast: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CITIZENS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        success: true,
        citizensInVillage: payload,
      };
    case FETCH_CITIZENS_FAILED:
      return {
        ...state,
        error: payload,
        isError: true,
        isLoading: false,
      };
    case FETCH_CITIZENS_REQUESTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        success: true,
        citizens: payload,
      };
    case FETCH_CITIZENS_REQUESTS_FAILED:
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
    case INIT_LOADING_STATE: {
      return {
        ...state,
        initialLoading: payload,
      };
    }
    case SHOW_LEADER_TOAST:
      return {
        showLeaderToast: payload,
      };
    default:
      return state;
  }
};
