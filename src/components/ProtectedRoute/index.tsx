/** @format */

import { Navigate } from "react-router-dom";
import React from "react";
import useAuth from "../../hooks/useAuth";

interface IProps {
  children: any;
}

const ProtectedRoute = ({ children }: IProps) => {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/login" replace />;
};
export default ProtectedRoute;
