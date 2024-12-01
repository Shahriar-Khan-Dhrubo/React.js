import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

export default function Signup() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert("Form submitted successfully!");
      resetForm();
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .min(6, "Name must have at least 6 characters")
        .required("Name is required"),
      email: yup.string().email("Invalid Email").required("Email is required"),
      password: yup
        .string()
        .min(6, "Password must have at least 6 characters")
        .required("Password is required"),
    }),
  });

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "left" }}>
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-describedby="nameError"
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "8px",
              borderColor:
                formik.touched.name && formik.errors.name ? "red" : "",
            }}
          />
          {formik.touched.name && formik.errors.name && (
            <span id="nameError" style={{ color: "red", fontSize: "12px" }}>
              {formik.errors.name}
            </span>
          )}
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-describedby="emailError"
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "8px",
              borderColor:
                formik.touched.email && formik.errors.email ? "red" : "",
            }}
          />
          {formik.touched.email && formik.errors.email && (
            <span id="emailError" style={{ color: "red", fontSize: "12px" }}>
              {formik.errors.email}
            </span>
          )}
        </div>
        <div style={{ marginBottom: "16px" }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-describedby="passwordError"
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "8px",
              borderColor:
                formik.touched.password && formik.errors.password ? "red" : "",
            }}
          />
          {formik.touched.password && formik.errors.password && (
            <span id="passwordError" style={{ color: "red", fontSize: "12px" }}>
              {formik.errors.password}
            </span>
          )}
        </div>
        <button
          type="submit"
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#FFF",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
