import axios from "axios";
import {apiUrl} from "../common/api";
import {successNotifiy,failureNotify} from "./notifications/notifications";

export const REGION_LIST = 'PROJECT_LIST';
export const REGION_LIST_ERROR = 'PROJECT_LIST_ERROR';
export const LIST_SORT_LIB = 'LIST_SORT_LIB';
export const ALL_INFO_LIST = 'ALL_INFO_LIST'

export const fetchRegionList = () => {
  return dispatch => {
    axios.get(apiUrl)
      .then(res => {
        dispatch({
          type: REGION_LIST,
          payload: res.data
        });
        successNotifiy('OK','You successfully registered.');
      })
      .catch(err => {
        dispatch(regionListError(err.message));
        failureNotify('ERROR',err.message)
      });
  }
}
export const fetchOrderList = (payload) => {
  return dispatch => {
    axios.get(apiUrl)
      .then(res => {
        dispatch({
          type: ALL_INFO_LIST,
          payload: res.data
        });
        successNotifiy('OK','You successfully registered.');
      })
      .catch(err => {
        dispatch(regionListError(err.message));
        failureNotify('ERROR',err.message)
      });
  }
}
export const sortByLib = () => ({
  type: LIST_SORT_LIB,
});

const regionListError = error => ({
  type: REGION_LIST_ERROR,
  payload: {
    error
  }
});
