import { combineReducers } from 'redux';
import queueReducer from './queue-reducer';

const mainReducer = combineReducers({queueReducer});

export default mainReducer;