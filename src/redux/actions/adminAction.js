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
  import axios from "axios";
  import action from "./action";
  import AsyncStorage from "@react-native-async-storage/async-storage";

  export const getAllVillageCitizens = (data, screenName) => async (dispatch) => {
    dispatch(action(LOADING_STATE, true));
    const res = await AsyncStorage.getItem("AuthData");
    const token = JSON.parse(res).token;
    try {
      const response = await axios({
        method: "GET",
        url: `https://citizen-monitor.onrender.com/admin/citizens?province=${data.province}&district=${data.district}&sector=${data.sector}&cell=${data.cell}&village=${data.village}`,
        data: data,
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(action(LOADING_STATE, false));
      if (response.status >= 400) {
        dispatch(action(FETCH_ALL_VILLAGE_CITIZENS_FAILED, response.error));
      } else {
        dispatch(action(FETCH_ALL_VILLAGE_CITIZENS__SUCCESS, response.data.citizens.response));
        dispatch(action(NAVIGATE_TO_CITIZENS_SCREEN, screenName));
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        dispatch(action(FETCH_ALL_VILLAGE_CITIZENS_FAILED, error.response.data));
        alert(error.response.data.message);
        dispatch(action(FETCH_ALL_VILLAGE_CITIZENS_FAILED, error.response.status));
        dispatch(action(FETCH_ALL_VILLAGE_CITIZENS_FAILED, error.response.headers));
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        dispatch(action(FETCH_ALL_VILLAGE_CITIZENS_FAILED, error.request));
      } else {
        // Something happened in setting up the request that triggered an Error
        dispatch(action(FETCH_ALL_VILLAGE_CITIZENS_FAILED, error.message));
      }
      dispatch(action(FETCH_ALL_VILLAGE_CITIZENS_FAILED, error.config));
    }
  };


  export const appointAleader = (data) => async (dispatch) => {
    dispatch(action(LOADING_STATE, true));
    const res = await AsyncStorage.getItem("AuthData");
    const token = JSON.parse(res).token;
    try {
      const response = await axios({
        method: "POST",
        url: `https://citizen-monitor.onrender.com/admin/citizens/66bec882-49d5-48ac-b675-d50d42a729d7/change-to-leader`,
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(action(LOADING_STATE, false));
      if (response.status >= 400) {
        dispatch(action(APPOINT_LEADER_FAILED, response.error));
      } else {
        dispatch(action(APPOINT_LEADER_SUCCESS, response));
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        dispatch(action(APPOINT_LEADER_FAILED, error.response.data));
        alert(error.response.data.message);
        dispatch(action(APPOINT_LEADER_FAILED, error.response.status));
        dispatch(action(APPOINT_LEADER_FAILED, error.response.headers));
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        dispatch(action(APPOINT_LEADER_FAILED, error.request));
      } else {
        // Something happened in setting up the request that triggered an Error
        dispatch(action(APPOINT_LEADER_FAILED, error.message));
      }
      dispatch(action(APPOINT_LEADER_FAILED, error.config));
    }
  };


  export const disappointAleader = (data) => async (dispatch) => {
    dispatch(action(LOADING_STATE, true));
    const res = await AsyncStorage.getItem("AuthData");
    const token = JSON.parse(res).token;
    try {
      const response = await axios({
        method: "POST",
        url: `https://citizen-monitor.onrender.com/admin/citizens/66bec882-49d5-48ac-b675-d50d42a729d7/change-to-citizen`,
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(action(LOADING_STATE, false));
      if (response.status >= 400) {
        dispatch(action(DISAPPOINT_LEADER_FAILED, response.error));
      } else {
        dispatch(action(DISAPPOINT_LEADER_SUCCESS, response));
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        dispatch(action(DISAPPOINT_LEADER_FAILED, error.response.data));
        alert(error.response.data.message);
        dispatch(action(DISAPPOINT_LEADER_FAILED, error.response.status));
        dispatch(action(DISAPPOINT_LEADER_FAILED, error.response.headers));
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        dispatch(action(DISAPPOINT_LEADER_FAILED, error.request));
      } else {
        // Something happened in setting up the request that triggered an Error
        dispatch(action(DISAPPOINT_LEADER_FAILED, error.message));
      }
      dispatch(action(DISAPPOINT_LEADER_FAILED, error.config));
    }
  };