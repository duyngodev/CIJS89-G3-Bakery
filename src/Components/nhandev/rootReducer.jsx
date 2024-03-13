import { combineReducers } from 'redux';
import singleProductReducer from './reducer.js';

const rootReducer = combineReducers({
  singleProduct: singleProductReducer 
});

export default rootReducer;
