import * as actionTypes from '../action/actionListRegion';

export default (state = { allList: [] }, action) => {
  switch (action.type){
    case actionTypes.ALL_INFO_LIST:
      return {
        ...state,
        allList: action.payload
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
