import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../services/firebase.auth";
import { useDispatch } from "react-redux";
import { addUser } from "../../features/userSlice";
import Joi from "joi";
import InputGroup from "../Shared/InputGroup";

function SignUp() {
  const initState = {
    fullName: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
  const [data, setData] = useState(initState);
  const [errors, setErrors] = useState(initState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = Joi.object({
    fullName: Joi.string().required(),
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
      const user = await signUp(data.email, data.password, data.fullName).then(
        (user) => {
          dispatch(addUser(user));
          return user;
        }
      );
      if (user) navigate("/");
    }
  };

  return (
    <>
      <div className="container">
        <form className="col-11 col-md-9 my-5 mx-auto">
          <InputGroup
            data={data}
            errors={errors}
            handleChange={handleChange}
            id={"fullName"}
            name={"fullName"}
            type={"text"}
            labelText={"Full Name"}
          />
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
          <InputGroup
            data={data}
            errors={errors}
            handleChange={handleChange}
            id={"repeatPassword"}
            name={"repeatPassword"}
            type={"password"}
            labelText={"Repeat Password"}
          />

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
