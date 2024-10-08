import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../services/firebase.auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/userSlice";
import Joi from "joi";
import InputGroup from "../Shared/InputGroup";

function Login() {
  const initState = { email: "", password: "" };
  const [data, setData] = useState(initState);
  const [errors, setErrors] = useState(initState);

  const dispatch = useDispatch();
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
      const user = await signIn(data.email, data.password).then((user) => {
        dispatch(addUser(user));
        return user;
      });
      if (user) navigate("/");
    }
  };
  return (
    <>
      <div className="container pt-5">
        <form className="col-11 col-md-9 my-5 mx-auto">
          <InputGroup
            data={data}
            errors={errors}
            handleChange={handleChange}
            id={"email"}
            name={"email"}
            type={"email"}
            labelText={"Email Address"}
          />
          <InputGroup
            data={data}
            errors={errors}
            handleChange={handleChange}
            id={"password"}
            name={"password"}
            type={"password"}
            labelText={"Password"}
          />

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
