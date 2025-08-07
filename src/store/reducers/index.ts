/** @format */

import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import tasksReducer from "./tasksSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
});

export default rootReducer;
