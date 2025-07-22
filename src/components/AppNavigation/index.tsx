import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import React from "react";
import ProtectedRoute from "../ProtectedRoute";

const AppNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
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
