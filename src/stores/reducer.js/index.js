import { combineReducers } from 'redux';
import userReducer from './userReducer';
import storyReducer from './userReducer';


const rootReducer = combineReducers({
  userReducer,
  storyReducer
});

export default rootReducer;
