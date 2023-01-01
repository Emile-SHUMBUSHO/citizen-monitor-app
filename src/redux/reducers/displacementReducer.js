import {
  REQUEST_TO_LEFT_VILLAGE_SUCCESS,
  REQUEST_TO_LEFT_VILLAGE_FAILED,
  SHOW_DISPLACEMENT_TOAST,
  LOADING_STATE,
  GET_LEFT_AND_JOIN_VILLAGE_HISTORY_SUCCESS,
  GET_LEFT_AND_JOIN_VILLAGE_HISTORY_FAILED
} from "../types";

const initialState = {
  displacementData: [],
  error: [],
  isError: false,
  success: false,
  isLoading: false,
  migrationHistory: null,
  showDisplacementToast: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case LOADING_STATE:
      return {
        ...state,
        isLoading: payload,
      };
    case REQUEST_TO_LEFT_VILLAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        success: true,
        displacementData: payload,
      };
    case REQUEST_TO_LEFT_VILLAGE_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
        isError: true,
        success: false,
      };
    case GET_LEFT_AND_JOIN_VILLAGE_HISTORY_SUCCESS:
      return {
       ...state,
        isLoading: false,
        isError: false,
        success: true,
        migrationHistory: payload,
      }
    case GET_LEFT_AND_JOIN_VILLAGE_HISTORY_FAILED:
      return{
        ...state,
        error: payload,
        isLoading: false,
        isError: true,
        success: false,
      }
    case SHOW_DISPLACEMENT_TOAST:
      return {
        ...state,
        showDisplacementToast: payload,
      };
    default:
      return state;
  }
};
