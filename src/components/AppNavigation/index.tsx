/** @format */

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignInPage from "../../pages/SignInPage/index";
import React from "react";
import SignUpPage from "../../pages/SignUpPage/index";
import ProtectedRoute from "../ProtectedRoute";
import MainPage from "../../pages/MainPage";

const AppNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/registration" element={<SignUpPage />} />
        <Route path="*" element={<Navigate to="/login" />} />

        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default AppNavigation;
