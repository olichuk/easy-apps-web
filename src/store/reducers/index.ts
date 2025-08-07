/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import authReducer from "./authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
