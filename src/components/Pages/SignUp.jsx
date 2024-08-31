import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../services/firebase.auth";
import Joi from "joi";

function SignUp() {
  const [data, setData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const navigate = useNavigate();

  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .min(8)
      .max(30)
      .required(),
    repeatPassword: Joi.ref("password"),
  });

  const handleChange = (e) => {
    const state = { ...data };
    state[e.target.id] = e.target.value;
    setData(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = schema.validate(data, { abortEarly: false });
    if (userData.error) {
      const newErrors = {};
      for (const err of userData.error.details) {
        newErrors[err.path] = err.message;
        if (err.path == "repeatPassword") {
          newErrors[err.path] = "Passwords do not match";
        }
      }
      setErrors(newErrors);
    } else {
      setErrors({});
      const user = await signUp(data.email, data.password);
      if (user) navigate("/");
    }
  };

  return (
    <>
      <div className="container">
        <form className="col-11 col-md-9 my-5 mx-auto">
          {/* <div className="mb-3 d-flex flex-column flex-sm-row  gap-3">
            <div className="flex-grow-1">
              <label htmlFor="fname" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="fname"
                value={data.fname}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              />
            </div>
            <div className="flex-grow-1">
              <label htmlFor="lname" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lname"
                value={data.lname}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              />
            </div>
          </div> */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={data.email}
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
            {errors.email && (
              <p className="alert alert-danger mt-2 px-3 py-2">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={data.password}
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
            {errors.password && (
              <p className="alert alert-danger mt-2 px-3 py-2">
                {errors.password}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="repeatPassword" className="form-label">
              Repeat Password
            </label>
            <input
              type="password"
              className="form-control"
              id="repeatPassword"
              value={data.repeatPassword}
              onChange={(e) => {
                handleChange(e);
              }}
              required
            />
            {errors.repeatPassword && (
              <p className="alert alert-danger mt-2 px-3 py-2">
                {errors.repeatPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-dark px-5 py-2 rounded-5"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Sign Up
          </button>

          <p className="mt-4">
            Already have an account?
            <Link to={"/login"} className="fw-bold text-black ms-1">
              Login
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignUp;
