/** @format */

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignInPage from "../../pages/SignInPage/index";
import React from "react";
import SignUpPage from "../../pages/SignUpPage/index";

const AppNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/registration" element={<SignUpPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppNavigation;
