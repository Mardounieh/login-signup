import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export const InputSchema = yup.object().shape({
  firstname: yup
    .string("Please enter a string.")
    .required("First Name is required."),
  lastname: yup
    .string("Please enter a string.")
    .required("Last Name is required."),
  username: yup
    .string("Please enter a string.")
    .required("Username is required."),
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Email address is required."),
  password: yup
    .string()
    .min(8)
    .max(14)
    .matches(passwordRules, { message: "Please choose a stronger password" })
    .required("Password is required.")
});
