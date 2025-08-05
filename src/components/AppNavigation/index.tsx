/** @format */

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignInPage from "../../pages/SignInPage/index";
import React from "react";
import SignUpPage from "../../pages/SignUpPage/index";
// import ProtectedRoute from "../ProtectedRoute";
import TasksPage from "../../pages/TasksPage";
import ProtectedLayout from "../ProtectedLayout";
import CommonTasksPage from "../../pages/CommonTasksPage/CommonTasksPage";
import CurrentUserPage from "../../pages/CurrentUserPage/CurrentUserPage";
import ProtectedRoute from "../ProtectedRoute";

const AppNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/registration" element={<SignUpPage />} />
        <Route path="*" element={<Navigate to="/login" />} />

        <Route
          element={
            <ProtectedRoute>
              <ProtectedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/profile" element={<CurrentUserPage />} />
          <Route path="/common-tasks" element={<CommonTasksPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppNavigation;
