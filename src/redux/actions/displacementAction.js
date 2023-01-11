import {
  REQUEST_TO_LEFT_VILLAGE_SUCCESS,
  REQUEST_TO_LEFT_VILLAGE_FAILED,
  LOADING_STATE,
  SHOW_DISPLACEMENT_TOAST,
  GET_LEFT_AND_JOIN_VILLAGE_HISTORY_SUCCESS,
  GET_LEFT_AND_JOIN_VILLAGE_HISTORY_FAILED,
  APPROVE_CITIZEN_ADDRESS_SUCCESS,
  APPROVE_CITIZEN_ADDRESS_FAILED,
  APPROVE_LEAVE_AND_JOIN_SUCCESS,
  APPROVE_LEAVE_AND_JOIN_FAILED,
} from "../types";
import axios from "axios";
import action from "./action";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const leftVillage = (data) => async (dispatch) => {
  dispatch(action(LOADING_STATE, true));
  const res = await AsyncStorage.getItem("AuthData");
  const token = JSON.parse(res).token;
  try {
    const response = await axios({
      method: "POST",
      url: "https://citizen-monitor.onrender.com/displacement/left-village",
      data: data,
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(action(LOADING_STATE, false));
    if (response.status >= 400) {
      dispatch(action(REQUEST_TO_LEFT_VILLAGE_FAILED, response.error));
    } else {
      dispatch(action(REQUEST_TO_LEFT_VILLAGE_SUCCESS, response));
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      dispatch(action(REQUEST_TO_LEFT_VILLAGE_FAILED, error.response.data));
      alert(error.response.data.message);
      dispatch(action(REQUEST_TO_LEFT_VILLAGE_FAILED, error.response.status));
      dispatch(action(REQUEST_TO_LEFT_VILLAGE_FAILED, error.response.headers));
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      dispatch(action(REQUEST_TO_LEFT_VILLAGE_FAILED, error.request));
    } else {
      // Something happened in setting up the request that triggered an Error
      dispatch(action(REQUEST_TO_LEFT_VILLAGE_FAILED, error.message));
    }
    dispatch(action(REQUEST_TO_LEFT_VILLAGE_FAILED, error.config));
  }
};

export const leftAndJoinHistory = () => async (dispatch) => {
  dispatch(action(LOADING_STATE, true));
  try {
    const res = await AsyncStorage.getItem("AuthData");
    const token = JSON.parse(res).token;
    const response = await axios({
      method: "GET",
      url: "https://citizen-monitor.onrender.com/displacement/history",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = response.data.response.response;
    dispatch(action(LOADING_STATE, false));
    if (response.status >= 400) {
      dispatch(
        action(GET_LEFT_AND_JOIN_VILLAGE_HISTORY_FAILED, response.error)
      );
    } else {
      dispatch(action(GET_LEFT_AND_JOIN_VILLAGE_HISTORY_SUCCESS, data));
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      dispatch(
        action(GET_LEFT_AND_JOIN_VILLAGE_HISTORY_FAILED, error.response.data)
      );
      dispatch(
        action(GET_LEFT_AND_JOIN_VILLAGE_HISTORY_FAILED, error.response.status)
      );
      dispatch(
        action(GET_LEFT_AND_JOIN_VILLAGE_HISTORY_FAILED, error.response.headers)
      );
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      dispatch(action(GET_LEFT_AND_JOIN_VILLAGE_HISTORY_FAILED, error.request));
    } else {
      // Something happened in setting up the request that triggered an Error
      dispatch(action(GET_LEFT_AND_JOIN_VILLAGE_HISTORY_FAILED, error.message));
    }
    dispatch(action(GET_LEFT_AND_JOIN_VILLAGE_HISTORY_FAILED, error.config));
  }
};

export const approveCitizen = (userId) => async (dispatch) => {
  dispatch(action(LOADING_STATE, true));
  try {
    const res = await AsyncStorage.getItem("AuthData");
    const token = JSON.parse(res).token;
    const response = await axios({
      method: "POST",
      url: `https://citizen-monitor.onrender.com/address/${userId}/approve`,
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(action(LOADING_STATE, false));
    if (response >= 400) {
      dispatch(action(APPROVE_CITIZEN_ADDRESS_FAILED, response.error.message));
    } else {
      dispatch(action(APPROVE_CITIZEN_ADDRESS_SUCCESS, response));
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      dispatch(
        action(APPROVE_CITIZEN_ADDRESS_FAILED, error.response.data)
      );
      alert(error.response.data.message);
      dispatch(
        action(APPROVE_CITIZEN_ADDRESS_FAILED, error.response.status)
      );
      dispatch(
        action(APPROVE_CITIZEN_ADDRESS_FAILED, error.response.headers)
      );
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      dispatch(action(APPROVE_CITIZEN_ADDRESS_FAILED, error.request));
    } else {
      // Something happened in setting up the request that triggered an Error
      dispatch(action(APPROVE_CITIZEN_ADDRESS_FAILED, error.message));
    }
    dispatch(action(APPROVE_CITIZEN_ADDRESS_FAILED, error.config));
  }
};

export const approveLeaveAndJoin = () => async (dispatch) => {
  dispatch(action(LOADING_STATE, true));
  try {
    const res = await AsyncStorage.getItem("AuthData");
    const token = JSON.parse(res).token;
    const response = await axios({
      method: "POST",
      url: "https://citizen-monitor.onrender.com/displacement/76971054-818c-428a-9702-da34ebb881bb/approve-leaving",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(action(LOADING_STATE, false));
    if (response >= 400) {
      dispatch(action(APPROVE_LEAVE_AND_JOIN_FAILED, response.error));
    } else {
      dispatch(action(APPROVE_LEAVE_AND_JOIN_SUCCESS, response));
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      dispatch(
        action(APPROVE_LEAVE_AND_JOIN_FAILED, error.response.data)
      );
      alert(error.response.data.message);
      dispatch(
        action(APPROVE_LEAVE_AND_JOIN_FAILED, error.response.status)
      );
      dispatch(
        action(APPROVE_LEAVE_AND_JOIN_FAILED, error.response.headers)
      );
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      dispatch(action(APPROVE_LEAVE_AND_JOIN_FAILED, error.request));
    } else {
      // Something happened in setting up the request that triggered an Error
      dispatch(action(APPROVE_LEAVE_AND_JOIN_FAILED, error.message));
    }
    dispatch(action(APPROVE_LEAVE_AND_JOIN_FAILED, error.config));
  }
};
