import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const routeReducer = combineReducers({
  auth: authReducer
});

export default routeReducer;
