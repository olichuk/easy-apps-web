import SignInForm from "../../components/SignInForm";
import React from "react";
import logo from "../../assets/images/logo.svg";
import "./styles.css";

const SignInPage = () => {
  return (
    <div className="login-page-container">
      <img src={logo} alt="Logo" />
      <h1 className="login-title">Welcome!</h1>
      <SignInForm />
    </div>
  );
};
export default SignInPage;
