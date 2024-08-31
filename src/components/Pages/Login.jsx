import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../services/firebase.auth";
import Joi from "joi";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

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
  });

  const handleChange = (e) => {
    const state = { ...data };
    state[e.target.id] = e.target.value;
    setData(state);
    // console.log(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = schema.validate(data, { abortEarly: false });
    if (userData.error) {
      const newErrors = {};
      for (const err of userData.error.details) {
        newErrors[err.path] = err.message;
      }
      setErrors(newErrors);
    } else {
      setErrors({});
      const user = await signIn(data.email, data.password);
      if (user) navigate("/");
    }
  };
  return (
    <>
      <div className="container pt-5">
        <form className="col-11 col-md-9 my-5 mx-auto">
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

          <button
            type="submit"
            className="btn btn-dark px-5 py-2 rounded-5"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Login
          </button>

          <p className="mt-4">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Don't have an account?
            <Link to={"/signup"} className="fw-bold text-black ms-1">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
