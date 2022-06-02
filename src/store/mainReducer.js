import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer"

export const mainReducer = combineReducers({
  headerReducer,
})