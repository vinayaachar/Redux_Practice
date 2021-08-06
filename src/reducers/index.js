import counterReducer  from "./counter";
import { loggedReducer } from "./logged";
import { combineReducers } from "redux";


export const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});