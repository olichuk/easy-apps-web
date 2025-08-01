/** @format */

import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password cannot exceed 64 characters")
    .required("Please enter your password")
    .matches(/[A-Za-z]/, "Password must include at least one letter"),

  email: Yup.string()
    .required("Please enter your email")
    .email("Invalid email format"),
});

export default validationSchema;
