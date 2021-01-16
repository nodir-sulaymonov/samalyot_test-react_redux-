import * as actionTypes from '../action/actionListRegion';

export default (state = { regionList: [] }, action) => {
  switch (action.type){
    case actionTypes.REGION_LIST:
      return {
        ...state,
        regionList: action.payload
      };
    case actionTypes.LIST_SORT_LIB:
      let sortedLib = [...state.regionList];
      sortedLib.sort((a, b) => {
        return a.libraries - b.libraries;
      });
      return {
        ...state,
        regionList: sortedLib
      };
    case actionTypes.REGION_LIST_ERROR:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state;
  }
};
