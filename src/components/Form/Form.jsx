import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Form = () => {
  const navigate = useNavigate();
  // Formik validation
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // Yup validation
    validationSchema: Yup.object({
      email: Yup.string().email().required("Please enter a valid email."),
      password: Yup.string()
        .min(4)
        .max(60)
        .required("Your password must contain between 4 and 60 characters."),
    }),
    onSubmit: (values) => {
      console.log(values);

      navigate("/netflix-show");
    },
  });

  return (
    <form className="form__field" onSubmit={formik.handleSubmit}>
      {/* Email */}
      <div className="email__Input">
        <input
          className="form__input"
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email ? (
          <span className="errorMesage">{formik.errors.email}</span>
        ) : null}
      </div>

      {/* password */}
      <div className="password__Input last__input">
        <input
          className="form__input "
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password ? (
          <span className="errorMesage">{formik.errors.password}</span>
        ) : null}
      </div>

      <button className="btn__submit" type="submit">
        Sign In
      </button>
      <div className="check__div">
        <div className="check__div-inner">
          <input
            className="check"
            type="checkbox"
            name="remember"
            id="remember"
          />{" "}
          <label htmlFor="remember" className="remember">
            Remember Me
          </label>
        </div>
        <Link className="help" to="/">
          Need Help?
        </Link>
      </div>
    </form>
  );
};

export default Form;
