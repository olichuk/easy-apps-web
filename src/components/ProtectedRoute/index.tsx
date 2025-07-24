import { Navigate } from "react-router-dom";
import React from "react";
interface IProps {
  children: any;
}
const ProtectedRoute = ({ children }: IProps) => {
  const isAuth = true;
  return isAuth ? children : <Navigate to="/login" replace />;
};
export default ProtectedRoute;
