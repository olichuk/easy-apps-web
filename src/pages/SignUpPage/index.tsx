/** @format */

import SignUpForm from "../../components/SignUpForm";
import React, { useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  useEffect(() => {
    if (isAuth) {
      navigate("/tasks", { replace: true });
    }
  }, [isAuth]);

  return (
    <div className="registration-page-container">
      <SignUpForm />
    </div>
  );
};
export default SignUpPage;
