import {
  LOADING_STATE,
  SHOW_LEADER_TOAST,
  FETCH_CITIZENS_FAILED,
  FETCH_CITIZENS_SUCCESS,
  FETCH_CITIZENS_REQUESTS_SUCCESS,
  FETCH_CITIZENS_REQUESTS_FAILED,
  ACKNOWLEDGE_CITIZEN_FAILED,
  ACKNOWLEDGE_CITIZEN_SUCCESS,
  INIT_LOADING_STATE,
} from "../types";
import axios from "axios";
import action from "./action";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAllVillageCitizens = (data) => async (dispatch) => {
  dispatch(action(LOADING_STATE, true));
  const res = await AsyncStorage.getItem("AuthData");
  const token = JSON.parse(res).token;
  try {
    const response = await axios({
      method: "GET",
      url: `https://citizen-monitor.onrender.com/citizens?province=${data.province}&district=${data.district}&sector=${data.sector}&cell=${data.cell}&village=${data.village}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(action(LOADING_STATE, false));
    if (response.status >= 400) {
      dispatch(action(FETCH_CITIZENS_FAILED, response.error));
    } else {
      dispatch(
        action(FETCH_CITIZENS_SUCCESS, response.data.citizens.response)
      );
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      dispatch(action(FETCH_CITIZENS_FAILED, error.response.data));
      alert(error.response.data.message);
      dispatch(action(FETCH_CITIZENS_FAILED, error.response.status));
      dispatch(action(FETCH_CITIZENS_FAILED, error.response.headers));
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      dispatch(action(FETCH_CITIZENS_FAILED, error.request));
    } else {
      // Something happened in setting up the request that triggered an Error
      dispatch(action(FETCH_CITIZENS_FAILED, error.message));
    }
    dispatch(action(FETCH_CITIZENS_FAILED, error.config));
  }
};

export const getAllVillageCitizensRequest = () => async (dispatch) => {
  dispatch(action(LOADING_STATE, true));
  const res = await AsyncStorage.getItem("AuthData");
  const token = JSON.parse(res).token;
  try {
    const response = await axios({
      method: "GET",
      url: `https://citizen-monitor.onrender.com/displacement/displacement-requests`,
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(action(LOADING_STATE, false));
    if (response.status >= 400) {
      dispatch(action(FETCH_CITIZENS_REQUESTS_FAILED, response.error));
    } else {
      dispatch(
        action(FETCH_CITIZENS_REQUESTS_SUCCESS, response.data.response.response)
      );
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      dispatch(action(FETCH_CITIZENS_REQUESTS_FAILED, error.response.data));
      alert(error.response.data.message);
      dispatch(action(FETCH_CITIZENS_REQUESTS_FAILED, error.response.status));
      dispatch(action(FETCH_CITIZENS_REQUESTS_FAILED, error.response.headers));
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      dispatch(action(FETCH_CITIZENS_REQUESTS_FAILED, error.request));
    } else {
      // Something happened in setting up the request that triggered an Error
      dispatch(action(FETCH_CITIZENS_REQUESTS_FAILED, error.message));
    }
    dispatch(action(FETCH_CITIZENS_REQUESTS_FAILED, error.config));
  }
};

export const acknowledgeCitizensRequest = (userId) => async (dispatch) => {
  dispatch(action(LOADING_STATE, true));
  dispatch(action(INIT_LOADING_STATE, true));
  const res = await AsyncStorage.getItem("AuthData");
  const token = JSON.parse(res).token;
  try {
    const response = await axios({
      method: "POST",
      url: `https://citizen-monitor.onrender.com/address/${userId}/approve`,
      data: userId,
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(action(INIT_LOADING_STATE, false));
    dispatch(action(LOADING_STATE, false));
    if (response.status >= 400) {
      dispatch(action(ACKNOWLEDGE_CITIZEN_FAILED, response.error));
    } else {
      dispatch(action(ACKNOWLEDGE_CITIZEN_SUCCESS, response));
      dispatch(action(SHOW_LEADER_TOAST, true));
      setTimeout(() => {
        dispatch(action(SHOW_LEADER_TOAST, false));
      }, 5000);
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      dispatch(action(ACKNOWLEDGE_CITIZEN_FAILED, error.response.data));
      alert(error.response.data.message);
      dispatch(action(ACKNOWLEDGE_CITIZEN_FAILED, error.response.status));
      dispatch(action(ACKNOWLEDGE_CITIZEN_FAILED, error.response.headers));
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      dispatch(action(ACKNOWLEDGE_CITIZEN_FAILED, error.request));
    } else {
      // Something happened in setting up the request that triggered an Error
      dispatch(action(ACKNOWLEDGE_CITIZEN_FAILED, error.message));
    }
    dispatch(action(ACKNOWLEDGE_CITIZEN_FAILED, error.config));
  }
};
