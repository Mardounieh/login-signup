import { useFormik } from "formik";

import { BiLock } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { MdPersonAddAlt } from "react-icons/md";
import { InputSchema } from "../../schemas/schema";

const onSubmit = () => {
  console.log("successful");
};

export default function Form() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
      },
      validationSchema: InputSchema,
      onSubmit,
    });
  console.log(errors);
  return (
    <form
      action="#"
      onSubmit={handleSubmit}
      className="flex justify-center"
    >
      <div className="flex flex-col items-center midGap my-width">
        <div className="flex minGap full-width">
          <div className="flex flex-col minGap full-width inputParent">
            <label htmlFor="firstname" className="font-sm text-slate pointer">
              First Name
            </label>
            <div
              className={`flex items-center minGap inputContainer transition ${
                errors.firstname && touched ? "invalidInput" : "validInput"
              }`}
            >
              <MdPersonAddAlt className="traitIcon" />
              <input
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                id="firstname"
                placeholder="First Name"
              />
            </div>
            {errors.firstname && touched && <p className="error">* {errors.firstname}</p>}
          </div>
          <div className="flex flex-col minGap full-width inputParent">
            <label htmlFor="lastname" className="font-sm text-slate pointer">
              Last Name
            </label>
            <div
              className={`flex items-center minGap inputContainer transition ${
                errors.lastname && touched ? "invalidInput" : "validInput"
              }`}
            >
              <MdPersonAddAlt className="traitIcon" />
              <input
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                id="lastname"
                placeholder="Last Name"
              />
            </div>
            {errors.lastname && touched && <p className="error">* {errors.lastname}</p>}
          </div>
        </div>
        <div className="flex flex-col midGap full-width">
          <div className="inputParent">
            <label htmlFor="username" className="font-sm text-slate pointer">
              Username
            </label>
            <div
              className={`flex items-center minGap inputContainer transition ${
                errors.username && touched ? "invalidInput" : "validInput"
              }`}
            >
              <BsPersonCircle className="traitIcon" />
              <input
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                id="username"
                placeholder="Username"
              />
            </div>
            {errors.username && touched && <p className="error">* {errors.username}</p>}
          </div>
          <div className="inputParent">
            <label htmlFor="email" className="font-sm text-slate pointer">
              Email
            </label>
            <div
              className={`flex items-center minGap inputContainer transition ${
                errors.email && touched ? "invalidInput" : "validInput"
              }`}
            >
              <CgMail className="traitIcon" />
              <input
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            {errors.email && touched && <p className="error">* {errors.email}</p>}
          </div>
          <div className="inputParent">
            <label htmlFor="password" className="font-sm text-slate pointer">
              Password
            </label>
            <div
              className={`flex items-center minGap inputContainer transition ${
                errors.password && touched ? "invalidInput" : "validInput"
              }`}
            >
              <BiLock className="traitIcon" />
              <input
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>
            {errors.password && touched && <p className="error">* {errors.password}</p>}
          </div>
          <div>
            <input type="submit" value="Submit" className="submit" />
          </div>
        </div>
        <p className="font-sm text-gray text-start full-width">
          By creating an account, you agree to the{" "}
          <a href="#" className="important">
            Terms of Service
          </a>
          . We'll occasionally send your account-related emails.{" "}
        </p>
        <p className="font-sm text-slate flex minGap items-center">
          Already have an account?{" "}
          <button className="log pointer">Login</button>
        </p>
      </div>
    </form>
  );
}
