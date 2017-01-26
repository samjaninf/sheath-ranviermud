// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import worldData from './worldData';

const rootReducer = combineReducers({
  worldData,
  routing
});

export default rootReducer;
