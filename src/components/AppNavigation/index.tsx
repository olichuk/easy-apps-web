import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "../../pages/SignInPage/index";
import React from "react";
import ProtectedRoute from "../ProtectedRoute";
import SignUpPage from "../../pages/SignUpPage/SignUp";

const AppNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRoute>
              <SignInPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/registration"
          element={
            <ProtectedRoute>
              <SignUpPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default AppNavigation;
