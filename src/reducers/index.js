import { combineReducers } from 'redux';
import changeNumber from './upDown';


const rootReducer = combineReducers({
  changeNumber,
  // here you can pass so many reducer....
})

export default rootReducer;

//now go the store and add all the state and actions to it.