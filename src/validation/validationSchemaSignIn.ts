import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Za-z]/, "Password must include at least one letter"),

  email: Yup.string()
    .required("Please enter your email")
    .email("Invalid email format"),
});

export default validationSchema;
