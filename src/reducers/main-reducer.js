import { combineReducers } from 'redux';
import itemReducer from './item-reducer';
import queueReducer from './queue-reducer';

export default mainReducer = combineReducers({itemReducer, queueReducer});