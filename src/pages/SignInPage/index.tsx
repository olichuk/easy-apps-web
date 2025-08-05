/** @format */

import SignInForm from "../../components/SignInForm";
import React, { useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import "./styles.css";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  useEffect(() => {
    if (isAuth) {
      navigate("/tasks", { replace: true });
    }
  }, [isAuth]);

  return (
    <div className="login-page-container">
      <img src={logo} alt="Logo" />
      <h1 className="login-title">Welcome!</h1>
      <SignInForm />
    </div>
  );
};
export default SignInPage;
