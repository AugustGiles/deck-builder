import { combineReducers } from "redux";
import userReducer from "./userReducer";
import trackerReducer from "./trackerReducer";

export default combineReducers({ user: userReducer, tracker: trackerReducer });
