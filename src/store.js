import { createStore } from "redux";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

//now go to the root file of the react that is index.js and import this store.