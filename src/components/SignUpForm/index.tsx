/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import "./styles.css";
import { Formik } from "formik";
import validationSchemaSignUp from "../../validation/validationSchemaSignUp";
import TextError from "../TextError";
import ImagePicker from "../ImagePicker";

const SignUpForm = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        avatar: "",
        email: "",
        name: "",
        password: "",
        repeatPassword: "",
      }}
      validationSchema={validationSchemaSignUp}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange, handleSubmit, errors }) => (
        <div className="registration-form-container">
          <ImagePicker />
          {errors.avatar && <TextError error={errors.avatar} />}
          <div className="registration-form-inputs-container">
            <CustomInput
              label="Email"
              onChange={handleChange("email")}
              type="email"
            />
            {errors.email && <TextError error={errors.email} />}
            <CustomInput
              label="Name"
              onChange={handleChange("name")}
              type="text"
            />
            {errors.name && <TextError error={errors.name} />}
            <CustomInput
              type="password"
              label="Password"
              onChange={handleChange("password")}
              isShowPassword
            />
            {errors.password && <TextError error={errors.password} />}
            <CustomInput
              label="Repeat password"
              onChange={handleChange("repeatPassword")}
              type="password"
            />
            {errors.repeatPassword && (
              <TextError error={errors.repeatPassword} />
            )}
          </div>

          <div className="registration-form-buttons-container">
            <CustomButton
              text="Sign Up"
              type="submit"
              onClick={() => handleSubmit()}
            />

            <CustomButton
              text="Go To Sign In"
              onClick={() => navigate("/login")}
            />
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignUpForm;
