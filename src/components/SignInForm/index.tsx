/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import "./styles.css";
import { Formik } from "formik";
import validationSchema from "../../validation/validationSchemaSignIn";
import TextError from "../TextError";

const SignInForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, handleSubmit, errors }) => (
        <div className="login-form-container">
          <div className="login-form-inputs-container">
            <CustomInput
              label="Email"
              onChange={handleChange("email")}
              type="email"
            />
            {errors.email && <TextError error={errors.email} />}
            <CustomInput
              type="password"
              label="Password"
              onChange={handleChange("password")}
            />
            {errors.password && <TextError error={errors.password} />}
          </div>

          <div className="login-form-buttons-container">
            <CustomButton
              text="Log In"
              type="submit"
              onClick={() => handleSubmit()}
            />

            <CustomButton
              text="Go To Sign Up"
              onClick={() => navigate("/registration")}
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignInForm;
