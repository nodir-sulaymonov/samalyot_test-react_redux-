import {combineReducers} from 'redux';
import regionList from './region-reducer'
import allInforList from './all-info-reducer'
export default combineReducers({
  region: regionList,
  allList: allInforList
});
