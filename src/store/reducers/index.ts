/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import authReducer from "./authSlice";
import tasksReducer from "./tasksSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  tasks: tasksReducer,
});

export default rootReducer;
