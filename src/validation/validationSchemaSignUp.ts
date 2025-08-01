/** @format */

import * as Yup from "yup";

const validationSchemaSignUp = Yup.object().shape({
  email: Yup.string().email().required("Email is required").label("Email"),
  name: Yup.string().min(2).required("Name is required").label("Name"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password cannot exceed 64 characters")
    .required("Please enter your password")
    .matches(/[A-Za-z]/, "Password must include at least one letter")
    .label("Password"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please enter your password again")
    .label("Repeat password"),
  avatar: Yup.string(),
});

export default validationSchemaSignUp;
